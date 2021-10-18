import React, { Component } from "react";
import LeftArrow from "../Images/LeftArrow.png";
import TimeStamp from "../TimeStamp";
import "./AppliedJob.css";

export class AppliedJob extends Component {
	render() {
		const { jobTitle, companyName, address, jobType, dateApplied } =
			this.props.appliedJob;
		return (
			<div className='job'>
				<div className='job-status'></div>
				<div className='job-detail-container'>
					<div className='job-detail-upper-portion'>
						<h2>{jobTitle}</h2>
						<p>
							{TimeStamp.setTimeStamp(
								dateApplied.min,
								dateApplied.hour,
								dateApplied.day,
								dateApplied.month,
								dateApplied.year
							)}
						</p>
					</div>
					<div className='job-detail-lower-portion'>
						<div className='job-detail-lower-portion-left'>
							<h3>{companyName}</h3>
							<p>{address}</p>
						</div>
						<p>{jobType}</p>
					</div>
				</div>
				<div className='job-redirect'>
					<img src={LeftArrow} alt='Continue' />
				</div>
			</div>
		);
	}
}

export default AppliedJob;
