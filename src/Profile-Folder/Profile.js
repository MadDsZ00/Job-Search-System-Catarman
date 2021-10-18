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

				<div className='applied-jobs-container'>
					<h3>Jobs you Applied for:</h3>

					{this.props.appliedJobs.length <= 0 && (
						<p
							style={{
								textAlign: "center",
								padding: "10px",
								backgroundColor: "red",
								fontSize: "12px",
							}}>
							You haven't applied for a job yet!
						</p>
					)}

					{this.props.appliedJobs.map((appliedJob) => {
						return <AppliedJob appliedJob={appliedJob} />;
					})}
				</div>

				<div className='marginbottom' style={{ marginBottom: "200px" }} />
			</>
		);
	}
}

export default Profile;
