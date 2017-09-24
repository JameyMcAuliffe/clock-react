import React, { Component } from 'react';
import { Display } from './display'
import { Buttons } from './buttons'

export class Clock extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hours: 12,
			mins1: 0,
			mins2: 0,
			orientation: 'am'
		}
		this.setTime = this.setTime.bind(this)
	}	

	setTime(button) {
		if (button === 'hrs' && this.state.hours < 11) {
			this.setState({
				hours: this.state.hours + 1
			})
		}
		else if (button === 'hrs' && this.state.hours === 11 && this.state.orientation ==='am') {
			this.setState({
				hours: this.state.hours + 1,
				orientation: 'pm'
			})
		}
		else if (button === 'hrs' && this.state.hours === 11 && this.state.orientation ==='pm') {
			this.setState({
				hours: this.state.hours + 1,
				orientation: 'am'
			})
		}
		else if(button === 'hrs' && this.state.hours === 12) {
			this.setState({
				hours: 1
			})
		}
		else if (button ==='mins') {
			if (this.state.mins2 < 9) {
				this.setState({
					mins2: this.state.mins2 + 1
				})
			}
			else if (this.state.mins2 === 9 && this.state.mins1 < 5) {
				this.setState({
					mins1: this.state.mins1 + 1,
					mins2: 0
				})
			}
			else if (this.state.mins2 === 9 && this.state.mins1 === 5){
				this.setState({
					mins1: 0,
					mins2: 0
				})
			}
		}

	}


	render() {
		return (
			<div className="clock">
				<Display mins1={this.state.mins1} mins2={this.state.mins2} hours={this.state.hours} orientation={this.state.orientation}/>
				<Buttons onClick={this.setTime}/>
			</div>
		)
	}
}
