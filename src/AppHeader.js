import React from 'react';
import './AppHeader.css';

const AppHeader = React.createClass({
  render() {
    return (
	  	<div className="headerContainer">
			<h1>Where your money goes</h1>
			<h3>Payments made by Chichester District Council to individual suppliers with a value over £500 made within October.</h3>
		</div>
    );
  }
})

export default AppHeader;