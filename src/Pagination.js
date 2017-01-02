import React from 'react';
import './Pagination.css';
import leftCaret from './img/leftCaret.png';
import rightCaret from './img/rightCaret.png';

const Pagination = React.createClass({
	handleClick(link) {
		this.props.changePage(link)
	},
  render() {
    const pages = [], {from, to, leftEnd, rightEnd, current: currentStr, total, links, left, right} = this.props;
    const currentNum = parseInt(currentStr); 
  	if (left) {
  		pages.push( <span key={'left'} className="left" onClick={this.handleClick.bind(this,links[currentNum-1])}>
                    <img src={leftCaret} alt="previous page"/>
                  </span>)
  	}
  	if (leftEnd) {
  		pages.push(<span onClick={this.handleClick.bind(this,links[0])} key={'leftend'} className="leftEnd">0</span>)
  	}
  	for (let i=from; i<to; i++) {
  		if (i===currentNum) {
  			pages.push(<span className="current" key={i}>{i+1}</span>)
  		} else {
  			pages.push(<span onClick={this.handleClick.bind(this,links[i])} key={i}>{i+1}</span>)
  		}
  	}
  	if (rightEnd) {
  		pages.push(<span onClick={this.handleClick.bind(this,links[total-1])} key={'rightend'} className="rightEnd">{total}</span>)
  	}
  	if (right) {
  		pages.push(<span key={'right'} className="right" onClick={this.handleClick.bind(this,links[currentNum+1])}>
                    <img src={rightCaret} alt="next page"/>
                  </span>)
  	}
    return (
	  	<div className="paginationContainer">
	  		{pages}
		  </div>
    );
	}
})

export default Pagination;
