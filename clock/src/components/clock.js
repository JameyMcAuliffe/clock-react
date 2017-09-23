import React, { Component } from 'react';
import { Display } from './display'
import { Buttons } from './buttons'

export class Clock extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hours: 12,
			mins: '00',
			orientation: 'am'
		}
	}	

	render() {
		return (
			<div className="clock">
				<Display mins={this.state.mins} hours={this.state.hours} orientation={this.state.orientation}/>
				<Buttons/>
			</div>
		)
	}
}
