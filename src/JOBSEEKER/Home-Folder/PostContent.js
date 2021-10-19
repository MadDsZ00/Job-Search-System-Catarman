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
