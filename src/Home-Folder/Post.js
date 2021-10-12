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
							<Link to='/home/company-profile'>
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
							<img
								src={DeleteIcon}
								alt='Delete'
								title={`Close this post from ${info.companyName}`}
								onClick={this.viewModal}
							/>

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
						<PostContent info={info} showMore={this.state.showMore} />

						<div className='post-btn'>
							<button onClick={this.seeMore} className='see-more'>
								{this.state.showMore ? "See More" : "See Less"}
							</button>
							<Link to='/home/apply-now'>
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

export default Post;
