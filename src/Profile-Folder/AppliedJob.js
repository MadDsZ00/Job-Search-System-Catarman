import React, { Component } from "react";
import LeftArrow from "../Images/LeftArrow.png";
import "./AppliedJob.css";

export class AppliedJob extends Component {
	render() {
		return (
			<div className='job'>
				<div className='job-status'></div>
				<div className='job-detail-container'>
					<div className='job-detail-upper-portion'>
						<h2>Software Engineer</h2>
						<p>DA: 3d ago</p>
					</div>
					<div className='job-detail-lower-portion'>
						<div className='job-detail-lower-portion-left'>
							<h3>Google</h3>
							<p>Brgy. Cawayan</p>
						</div>
						<p>Internship</p>
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
