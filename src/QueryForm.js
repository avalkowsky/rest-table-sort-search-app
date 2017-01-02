import React from 'react';
import './QueryForm.css';

const QueryForm = React.createClass({
  onFormSubmit(event) {
  	event.preventDefault();
  	
  	const [search, select] = this.refs.queryForm.elements;
  	const query = {
  		name : search.name,
  		value: search.value
  	}
  	const rating = {
  		name : select.name,
  		value : select.value
  	}

  	this.props.getData({query, rating});
  },
  render() {
  	const selectPlaceholder = "Select pound rating";

  	const searchProps = {
  		type : "search",
  		name: "query",
  		placeholder: "Search suppliers"
  	};
  	const options = [];
  	for (let i=1; i<6; i++) {
  		options.push(<option key={i} value={i}>{i}</option>)
  	}
    return (
	  	<div className="formContainer">
			<form onSubmit={this.onFormSubmit} ref="queryForm">
				<input {...searchProps}/>
				<span className="selectContainer">
					<select name="rating">
					  <option value="" hidden>{selectPlaceholder}</option>
					  {options}
					</select>
				</span>
				<input type="reset" value="Reset"/>
				
				<button>Search</button>
				
			</form>
		</div>
    );
  }
})

export default QueryForm;
