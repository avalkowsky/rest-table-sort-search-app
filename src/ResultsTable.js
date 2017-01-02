import React from 'react';
import ResultsRow from './ResultsRow'
import './ResultsTable.css';

const ResultsTable = React.createClass({
	getDefaultProps() {  
		return {
			results: []
		}
	},	
  	render() {
  		const rows = this.props.results.map((result, i) => {
  			return <ResultsRow {...result} key={i} openModal={this.props.openModal}/>
  		});

	    return (
		  	<div className="tableContainer">
		  		<div className="tableHeader">
		  			<span className="suppliersHeader">Supplier</span>
		  			<span className="ratingsHeader">Pound Rating</span>
		  			<span className="referencesHeader">Reference</span>
		  			<span className="valuesHeader">Value</span>
		  		</div>
		  		{rows}
			</div>
	    );
  }
})

export default ResultsTable;
