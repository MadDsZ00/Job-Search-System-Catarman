import React, { Component } from "react";
import Gap from "../Gap";
import Header from "../Header";
import Navbar from "../Navbar";
import Activities from "../Profile-Folder/Activities";

export class Notification extends Component {
	handleChangePage = async (page) => {
		await this.props.handleChangePage(page);
	};

	componentDidMount = async () => {
		await this.handleChangePage("notification");
	};

	render() {
		return (
			<div
				className='notification-container'
				style={{ textAlign: "center" }}>
				<Header jobSeeker={this.props.jobSeeker} />
				<Navbar activePage='notification' />
				<Gap />

				<Activities />
			</div>
		);
	}
}

export default Notification;
