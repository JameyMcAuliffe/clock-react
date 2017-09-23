import React, { Component } from 'react';
import { Display } from './display'
import { Buttons } from './buttons'

export class Clock extends Component {
	render() {
		return (
			<div className="clock">
				<Display/>
				<Buttons/>
			</div>
		)
	}
}
