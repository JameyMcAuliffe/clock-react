import React, { Component } from 'react'

export class Buttons extends Component {
	render() {
		return (
			<div className="buttons-div">
				<button className="timer-buttons">Hrs</button>
				<button className="timer-buttons">Mins</button>
				<div>
					<button className="set-button">Set</button>
				</div>
			</div>
		)
	}
}
