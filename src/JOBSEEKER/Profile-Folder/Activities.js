import React, { Component } from "react";
import Activity from "./Activity";

export class Activities extends Component {
	render() {
		const { targetCompany } = this.props;
		const { infos } = this.props;

		return (
			<div className='activities-container'>
				<h3
					style={{
						padding: "0",
						margin: "0 0 10px 10px",
						textAlign: "left",
					}}>
					Notifications
				</h3>

				<Activity status='new' />
				<Activity />
				<Activity status='new' />
				<Activity status='new' type='hire' />
				<Activity type='hire' />
				<Activity status='new' />
			</div>
		);
	}
}

export default Activities;
