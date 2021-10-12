import React, { Component } from "react";
import Dp from "./Dp";
import JobProfile from "./JobProfile";
import WorkPostHeader from "../Home-Folder/WorkPostHeader";
import WorkPost from "../Home-Folder/WorkPost";
import Header from "../Header";
import Gap from "../Gap";
import Navbar from "../Navbar";
import Activities from "./Activities";
import "./Profile.css";
import AppliedJob from "./AppliedJob";

export class Profile extends Component {
	handleChangePage = async (page) => {
		await this.props.handleChangePage(page);
	};

	componentDidMount = async () => {
		await this.handleChangePage("profile");
	};

	render() {
		return (
			<>
				<Header jobSeeker={this.props.jobSeeker} />
				<Navbar activePage='profile' />
				<Gap />

				<Dp />
				<JobProfile />

				<WorkPostHeader
					name='Ralf Renz'
					onAdd={this.props.onAdd}
					showAdd={this.props.showAdd}
				/>

				{this.props.showAdd === false && (
					<WorkPost
						onAddPost={this.props.onAddPost}
						toggle={this.props.toggle}
						infos={this.props.infos}
					/>
				)}
				{/* 
				<Activities
					infos={this.props.infos}
					targetCompany={this.props.targetCompany}
				/> */}

				<div className='applied-jobs-container'>
					<h3>Jobs you Applied for:</h3>

					<AppliedJob />
					<AppliedJob />
					<AppliedJob />
					<AppliedJob />
				</div>

				<div className='marginbottom' style={{ marginBottom: "200px" }} />
			</>
		);
	}
}

export default Profile;
