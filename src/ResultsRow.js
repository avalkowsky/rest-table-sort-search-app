import React from 'react';
import ReactDOM from 'react-dom';
import './ResultsRow.css';
import pound_blue from './img/pound_blue.png';
import pound_white from './img/pound_white.png';

const ResultsRow = React.createClass({
	getDefaultProps() {
		return {  
			     payment_supplier: "",
			     payment_ref: "",
			     payment_cost_rating: "",
			     payment_amount: ""
				}	  
	},
	openModal(e) {
	    if(e.currentTarget === ReactDOM.findDOMNode(this.refs.row)) {
		    const {
				payment_supplier : supplier,
				payment_cost_rating : costRating,
				payment_ref: reference,
				payment_amount : amount
			} = this.props;
	      	this.props.openModal({supplier, costRating, reference, amount})
	    }
  	},
	
	render() {
		const {
			payment_supplier : supplier,
			payment_cost_rating : costRating,
			payment_ref: reference,
			payment_amount : amount
		} = this.props;

		const poundSign = "\u00A3";
		const pounds = poundSign + amount;

		const rating = [];		
		for (let i=0; i<5; i++) {
			if (i<costRating) {
				rating.push(<img src={pound_blue} alt="" key={i}/>)
			} else {
				rating.push(<img src={pound_white} alt="" key={i}/>)
			}
		}

		return (
		  	<div className="resultsRow" ref="row" onClick={this.openModal}>
		  		<span className="suppliersRow">{this.props.payment_supplier}</span>
		  		<span className="ratingRow">{rating}</span>
		  		<span className="referenceRow">{this.props.payment_ref}</span>
		  		<span className="valueRow">{pounds}</span>
			</div>
		);
	}
})

export default ResultsRow;
