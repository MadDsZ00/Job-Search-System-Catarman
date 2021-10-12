import React, { Component } from "react";
import Activity from "./Activity";

export class Activities extends Component {
	state = {
		activities: [
			{
				id: {},
				companyName: "Bantilo Company",
				companyAddress: "",
				jobTitle: "Software Developer",
				category: "",
				employerName: "",
			},
		],
	};

	getInfos = (activity) => {
		let { activities } = this.state;
		this.setState({
			activities: [...activities, activity],
		});
	};

	render() {
		const { targetCompany } = this.props;
		const { infos } = this.props;

		return (
			<div className='activity-container'>
				<h3>Notification</h3>

				<Activity />
			</div>
		);
	}
}

export default Activities;
