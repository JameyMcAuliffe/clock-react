import React, { Component } from 'react'

export class Buttons extends Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		let target = e.target.value
		this.props.onClick(target)
	}

	render() {
		return (
			<div className="buttons-div">
				<button value="hrs" className="timer-buttons" onClick={this.handleClick}>Hrs</button>
				<button value="mins" className="timer-buttons" onClick={this.handleClick}>Mins</button>
				<div>
					<button value="set" className="set-button" onClick={this.handleClick}>Set</button>
				</div>
			</div>
		)
	}
}
