import React, { Component } from 'react';

export class Display extends Component {
	render() {
		return (
			<div className="display">
				<h1 className="hours">12</h1>
				<h1 className="colon">:</h1>
				<h1 className="minutes">00</h1>
				<h1 className="orientation">am</h1>
			</div>
		)
	}
}
