import React, { Component } from "react";
import Employer2 from "../Images/Employer2.jpg";
import Bell from "../Images/Bell.png";
import Warning from "../Images/Warning.png";
import DeleteIcon from "../Images/DeleteIcon.png";
import LocationIcon from "../Images/LocationIcon.png";
import "./Activity.css";

export class Activity extends Component {
	render() {
		return (
			<div
				className={
					this.props.status === "new"
						? "activity-container-new"
						: "activity-container"
				}>
				<div className='activity-left-panel'>
					<div className='activity-left-panel-img-container'>
						<div className='activity-left-panel-img-main'>
							<img src={Employer2} alt='company' />
						</div>
						<div
							className={
								this.props.type === "job"
									? "activity-left-panel-img-support"
									: "activity-left-panel-img-support-warning"
							}>
							<img
								src={this.props.type === "job" ? Bell : Warning}
								alt=''
							/>
						</div>
					</div>
				</div>
				<div className='activity-main-panel'>
					<div className='activity-main-panel-content'>
						{this.props.type === "job" ? (
							<h4>
								<strong>Company Name</strong> responded on your job
								application as <span>Software Developer.</span>
							</h4>
						) : (
							<h4>
								<strong>Company Name</strong> is interested on hiring
								you as{" "}
								<span style={{ color: "#ff0040" }}>
									Software Developer.
								</span>
							</h4>
						)}

						<div className='activity-main-panel-content-info'>
							<p>5d ago</p>
							<div className='activity-main-panel-content-info-address'>
								<img src={LocationIcon} alt='' />
								<p> Brgy. Cawayan, Catarman</p>
							</div>
						</div>
					</div>
				</div>
				<div className='activity-right-panel'>
					{/* <div className='activity-right-panel-view'>
						<p>View</p>
					</div> */}
					{this.props.status === "new" ? (
						""
					) : (
						<img src={DeleteIcon} alt='Delete' />
					)}
				</div>
			</div>
		);
	}
}

Activity.defaultProps = {
	status: "old",
	type: "job",
};

export default Activity;
