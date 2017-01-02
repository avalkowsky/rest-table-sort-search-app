import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import QueryForm from './QueryForm';
import ResultsTable from './ResultsTable';
import Pagination from './Pagination';
import ModalWindow from './ModalWindow'; 
import {xhrRequest} from './utils';
import {tsh as url} from './APIs';
import './App.css';

const App = React.createClass( {
  getInitialState() {
    this.lastQueryUrl = url;
    return {
      payments: [],
      pagination: {},
      isModal: false,
      modalData : {}
    }
  },
  componentWillMount() {
    xhrRequest({
      _url: url,
      _onDone: this.onLoadDone,
      _json: true
    })
  },
  queryNewData({query, rating}) {
    const queryParams = [];
    if(query && query.value) {
      queryParams.push(encodeURIComponent(query.name) + "=" + encodeURIComponent(query.value));
    }
    if(rating && rating.value) {
      queryParams.push(encodeURIComponent(rating.name) + "=" + encodeURIComponent(rating.value));
    }
    const finalUrl = queryParams.length ? url + "?" + queryParams.join("&") : url;

    xhrRequest({
      _url: finalUrl,
      _onDone: this.onLoadDone,
      _json: true
    })

    this.lastQueryUrl = finalUrl;
  },
  requestNewPage(link) {
    const isFiltered = this.lastQueryUrl.indexOf("?") > -1;
    const finalUrl = isFiltered ? this.lastQueryUrl + "&" + link : url + "?" + link;
    
    xhrRequest({
      _url: finalUrl,
      _onDone: this.onLoadDone,
      _json: true
    })
  },
  onLoadDone(xhr) {
    if (xhr.response) {
       this.setState(xhr.response);
    } else {
      this.setState({pagination: {}, payments: []});
    }
  },
  closeModal(e) {
    if(e.currentTarget === ReactDOM.findDOMNode(this.refs.modal)) {
      e.stopPropagation();
      this.setState({
        isModal: false
      })
    }
  },
  openModal(modalData) {
    this.setState({
        isModal: true,
        modalData
    })
  },
  render() {
    const {payments, pagination, modalData} = this.state;
    
    let modalWindow;
    if(this.state.isModal) {
        modalWindow = <ModalWindow {...modalData}/>
    }

    return (
      <div className="appWrapper">
        <AppHeader/>
        <QueryForm getData={this.queryNewData}/>
        <ResultsTable results={payments} openModal={this.openModal}/>
        <Pagination changePage={this.requestNewPage} {...pagination}/>
        <div ref="modal" onClick={this.closeModal}>{modalWindow}</div>
      </div>
    );
  }
})

export default App;
