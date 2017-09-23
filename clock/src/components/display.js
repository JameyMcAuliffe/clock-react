import React, { Component } from 'react';

export class Display extends Component {
	
	setMins() {
		console.log("this.props.mins:", this.props.mins);
	}

	render() {
		return (
			<div className="display">
				<h1 className="hours">{this.props.hours}</h1>
				<h1 className="colon">:</h1>
				<h1 className="minutes">{this.props.mins}</h1>
				<h1 className="orientation">{this.props.orientation}</h1>
			</div>
		)
	}
}
