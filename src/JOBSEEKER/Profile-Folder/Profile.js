import React, { Component } from "react";
import Gap from "../../Gap";
import { Header } from "../../Header";
import WorkPost from "../Home-Folder/WorkPost";
import WorkPostHeader from "../Home-Folder/WorkPostHeader";
import Navbar from "../../Navbar";
import Dp from "./Dp";
import JobProfile from "./JobProfile";
import "./Profile.css";
import AppliedJob from "./AppliedJob";

export class Profile extends Component {
	state = {
		scrollPosition: 0,
	};

	handleScroll = async () => {
		await this.setState({
			scrollPosition: window.pageYOffset,
		});
	};

	handleChangePage = async (page) => {
		await this.props.handleChangePage(page);
	};

	componentDidMount = async () => {
		const scrollData = localStorage.getItem("profileScroll");
		await this.handleChangePage("profile");
		this.handleScroll();

		window.addEventListener("scroll", this.listenToScroll);
		window.scrollTo(0, scrollData);
	};

	componentWillUnmount() {
		window.removeEventListener("scroll", this.listenToScroll);
		this.handleScroll();
		window.scrollTo(0, this.state.scrollPosition);
	}

	listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const scrolled = winScroll / height;
		this.setState({
			scrollPosition: scrolled,
		});

		localStorage.setItem("profileScroll", window.pageYOffset);
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
					<h3
						style={{
							fontSize: "13px",
							color: "#949494",
							fontWeight: "600",
							marginLeft: "10px",
						}}>
						Jobs you Applied for:
					</h3>

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
						return (
							<AppliedJob
								key={appliedJob.id}
								appliedJob={appliedJob}
								activePage={this.props.activePage}
								handleChangePage={this.props.handleChangePage}
								setCompanyID={this.props.setCompanyID}
								infos={this.props.infos}
							/>
						);
					})}
				</div>

				<div className='marginbottom' style={{ marginBottom: "200px" }} />
			</>
		);
	}
}

export default Profile;
