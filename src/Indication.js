import React, { Component } from "react";
import CountDown from "./JOBSEEKER/Home-Folder/CountDown";

export class Indication extends Component {
	render() {
		return (
			<div
				className='indication'
				style={{ backgroundColor: `${this.props.backgroundcolor}` }}>
				<div>
					{this.props.text}
					{
						<CountDown
							method={this.props.method}
							delay={this.props.delay}
						/>
					}
				</div>
			</div>
		);
	}
}

export default Indication;
