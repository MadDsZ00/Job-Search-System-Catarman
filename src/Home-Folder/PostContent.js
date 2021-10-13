import React, { Component } from "react";
import "./PostContent.css";

export class PostContent extends Component {
	constructor() {
		super();

		this.state = {
			height: 0,
		};
	}

	componentDidMount() {
		const height = this.divElement.clientHeight;
		this.setState({ height });
	}

	render() {
		const {
			jobTitle,
			jobType,
			prefSex,
			status,
			qualification,
			requirement,
			description,
			employerName,
		} = this.props.info;
		const { showMore } = this.props;

		return (
			<div
				ref={(divElement) => {
					this.divElement = divElement;
				}}
				className='post-content'
				style={showMore ? { height: "0" } : { height: "auto" }}>
				{/* <h3 className='job-title'>{jobTitle}</h3>

				<div className='post-detail-container'>
					<div className='post-detail-group1'>
						<div className='post-detail'>
							<p>Job Category:</p>
							<h4>{this.props.info.category}</h4>
						</div>
						<div className='post-detail'>
							<p>Required No. of Employees:</p>
							<h4>{this.props.info.reqNoEmp}</h4>
						</div>
						<div className='post-detail'>
							<p>Salary:</p>
							<h4>{this.props.info.salary}</h4>
						</div>
					</div>

					<div className='post-detail-group2'>
						<div className='post-detail'>
							<p>Job Type:</p>
							<h4>{jobType}</h4>
						</div>
						<div className='post-detail'>
							<p>Preferred Sex:</p>
							<h4>{prefSex}</h4>
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
								<h4>{status}</h4>
							</div>
						</div>
					</div>
				</div> */}

				<div ref='out' className='job-qualification-container'>
					<div className='job-qualification-portion'>
						<h3>--- Job Qualifications ---</h3>
						<p>{qualification}</p>
					</div>
					<div className='job-qualification-portion'>
						<h3>--- Job Requirements ---</h3>
						<p>{requirement}</p>
					</div>
					<div className='job-qualification-portion'>
						<h3>--- Job Description ---</h3>
						<p>{description}</p>
					</div>

					<h2>Employer's Name: {employerName}</h2>
				</div>
			</div>
		);
	}
}

export default PostContent;
