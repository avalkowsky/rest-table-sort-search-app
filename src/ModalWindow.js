import React from 'react';
import './ModalWindow.css';

const ModalWindow = React.createClass({
	render() {
		const { supplier, costRating, reference, amount } = this.props;
		return (
		  	<div className="modalWindow">
		  		<div className="modalContent">
		  			<div className="modalContentHeader">Details: </div>
		  			<div>Supplier name: {supplier}</div>
		  			<div>Cost rating: {costRating}</div>
		  			<div>Reference: {reference}</div>
		  			<div>Value: {amount}</div>
		  		</div>
			</div>
		);
	}
})

export default ModalWindow;
