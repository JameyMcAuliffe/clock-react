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
			orientation: 'am',
			set: false,
			timer: null,
			colon: ':',
			colonColor: {color: 'red'}
		}
		this.setTime = this.setTime.bind(this)
		this.clockNotSet = this.clockNotSet.bind(this)
		this.runClock = this.runClock.bind(this)
		this.startClock = this.startClock.bind(this)
		this.stopClock = this.stopClock.bind(this)
	}	


	clockNotSet() {
		if(this.state.set === false) {
			if(this.state.colonColor.color === 'red') {
				this.setState({
					colonColor: {color: '#2d2d2d'}
				})
			}
			else{
				this.setState({
					colonColor: {color: 'red'}
				})
			}
		}
	}

	startClock() {
		this.clockInterval = setInterval(this.runClock, 60000)
	}

	stopClock() {
		clearInterval(this.clockInterval)
	}

	componentDidMount() {
		setInterval(this.clockNotSet, 1000)
	}

	runClock() {
		if(this.state.mins2 < 9) {
			this.setState({
				mins2: this.state.mins2 + 1
			})
		}
		else if(this.state.mins2 === 9 && this.state.mins1 < 5) {
			this.setState({
				mins2: 0,
				mins1: this.state.mins1 + 1
			})
		}
		else if(this.state.mins2 === 9 && this.state.mins1 === 5 && this.state.hours < 11) {
			this.setState({
				mins2: 0,
				mins1: 0,
				hours: this.state.hours + 1
			})
		}
		else if (this.state.mins2 === 9 && this.state.mins1 === 5 && this.state.hours === 12) {
			this.setState({
				mins2: 0,
				mins1: 0,
				hours: 1
			})
		}
		else if(this.state.mins2 === 9 && this.state.mins1 === 5 && this.state.hours === 11 && this.state.orientation === 'am') {
			this.setState({
				orientation: 'pm',
				mins1: 0,
				mins2: 0,
				hours: 12
			})
		}
		else {
			this.setState({
				orientation: 'am',
				mins1: 0,
				mins2: 0,
				hours: 12
			})
		}
	}

	setTime(button) {
		if (button === 'set' && this.state.set === false) {
			this.setState({
				set: true,
				colonColor: {color: 'red'}
			})
			// setInterval(this.runClock, 1000)
			this.startClock()

		}
		else if (button === 'set' && this.state.set === true) {
			this.setState({
				set: false
			})
			this.stopClock()
		}
		else if (button === 'hrs' && this.state.hours < 11) {
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
				<Display mins1={this.state.mins1} mins2={this.state.mins2} hours={this.state.hours} orientation={this.state.orientation} colon={this.state.colon} colonColor={this.state.colonColor}/>
				<Buttons onClick={this.setTime}/>
			</div>
		)
	}
}
