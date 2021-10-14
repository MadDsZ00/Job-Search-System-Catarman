import React, { Component } from "react";
import "./Post.css";
import DeleteIcon from "../Images/DeleteIcon.png";
import LocationIcon from "../Images/LocationIcon.png";
import PostContent from "./PostContent";
import { Link } from "react-router-dom";
import TimeStamp from "../TimeStamp";
import Modal from "./Modal";

export class Post extends Component {
	constructor() {
		super();
		this.state = {
			showMore: [false],
			isModalOpen: false,
		};
	}

	deletePost = () => {
		this.props.onDelete(this.props.info.id);
	};

	seeMore = (e) => {
		if (this.state.showMore === true) {
			this.setState({
				showMore: !this.state.showMore,
			});
		} else {
			this.setState({
				showMore: !this.state.showMore,
			});
		}
	};

	viewModal = () => {
		this.setState({
			isModalOpen: true,
		});
	};

	onCloseModal = () => {
		this.setState({
			isModalOpen: false,
		});
	};

	render() {
		const { info } = this.props;
		const { timeStamp } = this.props.info;
		return (
			<>
				<div className='post-container'>
					<div className='post-header'>
						<div className='upperLeft-info'>
							<Link to={`/${this.props.activePage}/company-profile`}>
								<div className='account-profile'>
									<img
										src={info.imageURL}
										alt='Stablishment'
										style={{ height: "60px" }}
										onClick={() => {
											this.props.setCompanyID(info.id);
										}}
									/>
								</div>
							</Link>

							<div className='basic-info'>
								<Link to='/home/company-profile'>
									<h2
										onClick={() => {
											this.props.setCompanyID(info.id);
										}}>
										{info.companyName}
									</h2>
								</Link>

								<div className='date-address'>
									<p>
										{TimeStamp.setTimeStamp(
											timeStamp.min,
											timeStamp.hour,
											timeStamp.day,
											timeStamp.month,
											timeStamp.year
										)}
									</p>
									<div className='address'>
										<img src={LocationIcon} alt='Location Icon' />
										<p>{info.companyAddress}</p>
									</div>
								</div>
							</div>
						</div>
						<div className='upperRight-info'>
							{this.props.showDelete && (
								<img
									src={DeleteIcon}
									alt='Delete'
									title={`Close this post from ${info.companyName}`}
									onClick={this.viewModal}
								/>
							)}

							{this.state.isModalOpen ? (
								<Modal
									headText='Remove Post Confirmation'
									modalText={`Are you sure you want to remove this post from ${info.companyName}?`}
									confirmText='Yes'
									closeText='No'
									close={this.onCloseModal}
									confirm={this.deletePost}
								/>
							) : (
								""
							)}
						</div>
					</div>

					<div className='post-body'>
						<div className='post-basic-content'>
							<h3 className='job-title'>{info.jobTitle}</h3>

							<div className='post-detail-container'>
								<div className='post-detail-group1'>
									<div className='post-detail'>
										<p>Job Category:</p>
										<h4>{info.category}</h4>
									</div>
									<div className='post-detail'>
										<p>Required No. of Employees:</p>
										<h4>{info.reqNoEmp}</h4>
									</div>
									<div className='post-detail'>
										<p>Salary:</p>
										<h4>{info.salary}</h4>
									</div>
								</div>

								<div className='post-detail-group2'>
									<div className='post-detail'>
										<p>Job Type:</p>
										<h4>{info.jobType}</h4>
									</div>
									<div className='post-detail'>
										<p>Preferred Sex:</p>
										<h4>{info.prefSex}</h4>
									</div>
									<div className='post-detail'>
										<p>Job Vacancy Status:</p>
										<div className='active-status'>
											<div
												className='active-circle'
												style={
													this.props.info.status === "Active"
														? { backgroundColor: "#00ff40" }
														: { backgroundColor: "#ff0000" }
												}></div>
											<h4>{info.status}</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
						<PostContent info={info} showMore={this.state.showMore} />

						<div className='post-btn'>
							<button onClick={this.seeMore} className='see-more'>
								{this.state.showMore ? "See More" : "See Less"}
							</button>
							<Link to={`/${this.props.activePage}/apply-now`}>
								<button
									title={
										info.isApplied
											? `Applied as ${info.jobTitle}`
											: `Apply as ${info.jobTitle}`
									}
									className='apply-btn'
									onClick={() => {
										this.props.setCompanyID(info.id);
									}}
									disabled={
										info.isApplied || info.status === "Closed"
											? "disabled"
											: ""
									}
									style={
										info.isApplied || info.status === "Closed"
											? { opacity: "0.3" }
											: { opacity: "1" }
									}>
									{info.isApplied ? "Applied" : "Apply Now"}
								</button>
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

Post.defaultProps = {
	showDelete: true,
};

export default Post;
