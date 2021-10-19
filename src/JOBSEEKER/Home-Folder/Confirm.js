import React, { Component } from "react";
import "./Confirm.css";
import User from "../../Images/User.png";
import shortid from "shortid";

export class Confirm extends Component {
	constructor() {
		super();

		this.state = {
			data: {
				id: "",
				companyName: "",
				timeStamp: {},
				companyAddress: "",
				jobTitle: "",
				reqNoEmp: "",
				salary: "",
				jobType: "",
				prefSex: "",
				qualification: "",
				requirement: "",
				description: "",
				employerName: "",
				imageURL: User,
				isApplied: "",
				status: "",
			},
		};
	}

	continue = () => {
		const {
			values: {
				jobTitle,
				jobCategory,
				noReqEmp,
				salary,
				prefSex,
				jobType,
				jobQualification,
				jobRequirement,
				jobDescription,
				employerName,
				contactNo,
				website,
				address,
			},
		} = this.props;

		this.setState(
			{
				data: {
					id: shortid.generate(),
					companyName: "Bantilo Inc...",
					timeStamp: {
						min: new Date().getMinutes(),
						hour: new Date().getHours(),
						day: new Date().getDate(),
						month: new Date().getMonth() + 1,
						year: new Date().getFullYear(),
					},
					companyAddress: address,
					jobTitle: jobTitle,
					category: jobCategory,
					reqNoEmp: noReqEmp,
					salary: salary,
					jobType: jobType,
					prefSex: prefSex,
					qualification: jobQualification,
					requirement: jobRequirement,
					description: jobDescription,
					employerName: employerName,
					imageURL: User,
					isApplied: false,
					status: "Active",
				},
			},
			function () {
				this.viewPost(this.state.data);
				this.props.nextStep();
			}
		);
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	viewPost = (post) => {
		this.props.onAddPost(post);
	};

	render() {
		const {
			values: {
				jobTitle,
				jobCategory,
				noReqEmp,
				salary,
				prefSex,
				jobType,
				jobQualification,
				jobRequirement,
				jobDescription,
				employerName,
				contactNo,
				website,
				address,
			},
		} = this.props;

		return (
			<div className='confirm-container'>
				<div className='confirm-text-fields'>
					<h3>--- Job Vacancy Preview ---</h3>

					<div className='form'>
						<label>Job Title</label>
						<p>{jobTitle}</p>
					</div>
					<div className='form'>
						<label>Job Category</label>
						<p>{jobCategory}</p>
					</div>
					<div className='form'>
						<label>No. of Required Employee/s:</label>
						<p>{noReqEmp}</p>
					</div>
					<div className='form'>
						<label>Salary</label>
						<p>₱ {salary}</p>
					</div>
					<div className='form'>
						<label>Preferred Sex</label>
						<p>{prefSex}</p>
					</div>
					<div className='form'>
						<label>Job Type</label>
						<p>{jobType}</p>
					</div>
					<div className='form'>
						<label>Job Qualifications</label>
						<p className='desc'>{jobQualification}</p>
					</div>
					<div className='form'>
						<label>Job Requirements</label>
						<p className='desc'>{jobRequirement}</p>
					</div>
					<div className='form'>
						<label>Job Descriptions</label>
						<p className='desc'>{jobDescription}</p>
					</div>
					<div className='form'>
						<label>Employer's Name</label>
						<p>{employerName}</p>
					</div>
					<div className='form'>
						<label>Establishment Contact Number</label>
						<p>{contactNo}</p>
					</div>
					<div className='form'>
						<label>Business Website</label>
						<p>{website}</p>
					</div>
					<div className='form'>
						<label>Complete Address</label>
						<p>{address}</p>
					</div>

					<div className='buttons'>
						<button className='continue' onClick={this.continue}>
							Post
						</button>
						<button className='back' onClick={this.back}>
							Back
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Confirm;
