import React, { Component } from "react";
import { Link } from "react-router-dom";
import TimeStamp from "../TimeStamp";
import "./ApplicationForm.css";
import Modal from "./Modal";
import LeftArrow from "../Images/LeftArrow.png";

export class ApplicationForm extends Component {
	state = {
		seeMore: false,
		post: {
			id: "",
			companyName: "",
			timeStamp: "",
			companyAddress: "",
			jobTitle: "",
			category: "",
			reqNoEmp: "",
			salary: "",
			jobType: "",
			prefSex: "",
			qualification: "",
			requirement: "",
			description: "",
			employerName: "",
			imageURL: {},
			isApplied: "",
			status: "",
		},
		isModalOpen: false,
	};

	filterObject = () => {
		this.props.infos.map((info) => {
			if (info.id === this.props.targetCompany) {
				this.setState({
					post: {
						id: info.id,
						companyName: info.companyName,
						timeStamp: {
							min: info.timeStamp.min,
							hour: info.timeStamp.hour,
							day: info.timeStamp.day,
							month: info.timeStamp.month,
							year: info.timeStamp.year,
						},
						companyAddress: info.companyAddress,
						jobTitle: info.jobTitle,
						category: info.category,
						reqNoEmp: info.reqNoEmp,
						salary: info.salary,
						jobType: info.jobType,
						prefSex: info.prefSex,
						qualification: info.qualification,
						requirement: info.requirement,
						description: info.description,
						employerName: info.employerName,
						imageURL: info.imageURL,
						isApplied: info.isApplied,
						status: info.status,
					},
				});
			}
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleApplication(this.props.targetCompany);
	};

	static defaultProps = {
		day: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
			21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
		],
		year: [
			1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
			2002, 2003, 2004, 2005, 2006,
		],
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

	componentDidMount() {
		this.filterObject();
	}

	render() {
		let birthDay = this.props.day.map((day) => {
			return (
				<option key={day} value={day}>
					{day}
				</option>
			);
		});

		let birthYear = this.props.year.map((year) => {
			return (
				<option key={year} value={year}>
					{year}
				</option>
			);
		});

		const { jobSeeker } = this.props;
		const { timeStamp } = this.state.post;
		const { post } = this.state;

		return (
			<div className='application-form-container'>
				<Link to={`/${this.props.activePage}`}>
					{/* <button>Back</button> */}
					<div className='back-icon-container'>
						<img
							src={LeftArrow}
							alt='back'
							title='Go Back'
							className='back-icon'
						/>
					</div>
				</Link>
				<div className='company-img'>
					<div className='company-img-wrapper'>
						<img src={this.state.post.imageURL} alt='Company Picture' />
					</div>
					<Link to='/home/company-profile'>
						<h2>{this.state.post.companyName}</h2>
					</Link>
				</div>
				<div className='preview-container'>
					<div
						className='preview-wrapper'
						style={{
							height: this.state.seeMore ? "100%" : "175px",
						}}>
						<div className='post-content'>
							<h3 className='job-title'>{post.jobTitle}</h3>

							<div className='apply-detail-container'>
								<div className='apply-detail'>
									<p>Date Posted:</p>
									<h4>
										{TimeStamp.setTimeStamp(
											timeStamp.min,
											timeStamp.hour,
											timeStamp.day,
											timeStamp.month,
											timeStamp.year
										)}
									</h4>
								</div>
								<div className='apply-detail'>
									<p>Company Address :</p>
									<h4>{post.companyAddress}</h4>
								</div>
								<div className='apply-detail'>
									<p>Job Category:</p>
									<h4>{post.category}</h4>
								</div>
								<div className='apply-detail'>
									<p>Required No. of Employees:</p>
									<h4>{post.reqNoEmp}</h4>
								</div>
								<div className='apply-detail'>
									<p>Salary:</p>
									<h4>{post.salary}</h4>
								</div>
								<div className='apply-detail'>
									<p>Job Type:</p>
									<h4>{post.jobType}</h4>
								</div>
								<div className='apply-detail'>
									<p>Preferred Sex:</p>
									<h4>{post.prefSex}</h4>
								</div>
							</div>

							<div className='job-qualification-portion'>
								<h3>--- Job Qualifications ---</h3>
								<p>{post.qualification}</p>
							</div>
							<div className='job-qualification-portion'>
								<h3>--- Job Requirements ---</h3>
								<p>{post.requirement}</p>
							</div>
							<div className='job-qualification-portion'>
								<h3>--- Job Description ---</h3>
								<p>{post.description}</p>
							</div>

							<h2>Employer's Name: {post.employerName}</h2>
						</div>
					</div>
					<div className='btn'>
						<button
							onClick={() => {
								this.setState({
									seeMore: !this.state.seeMore,
								});
							}}>
							{this.state.seeMore ? "See Less" : "See More"}
						</button>
					</div>
				</div>

				<div className='application-form'>
					<h2>Application Form</h2>
					<form
						className='app-form'
						onSubmit={(e) => {
							e.preventDefault();

							this.setState({
								isModalOpen: true,
							});
						}}>
						<div className='fields'>
							<div className='field'>
								<label>First Name: </label>
								<input
									name='firstName'
									type='text'
									placeholder='First Name'
									value={jobSeeker.firstName}
									onChange={(e) => {
										this.props.handleChange(e, "firstName");
									}}
								/>
							</div>
							<div className='field'>
								<label>Middle Name: </label>
								<input
									type='text'
									placeholder='Middle Name'
									value={jobSeeker.middleName}
									onChange={(e) => {
										this.props.handleChange(e, "middleName");
									}}
								/>
							</div>
							<div className='field'>
								<label>Last Name: </label>
								<input
									type='text'
									placeholder='Last Name'
									value={jobSeeker.lastName}
									onChange={(e) => {
										this.props.handleChange(e, "lastName");
									}}
								/>
							</div>
							<div className='field'>
								<label>Home Address: </label>
								<input
									type='text'
									placeholder='Home Address'
									value={jobSeeker.homeAddress}
									onChange={(e) => {
										this.props.handleChange(e, "homeAddress");
									}}
								/>
							</div>
							<div className='status-group'>
								<div className='field'>
									<label>Sex: </label>
									<select defaultValue=''>
										<option
											disabled='disabled'
											hidden='hidden'
											defaultValue={jobSeeker.sex}
											onChange={(e) => {
												this.props.handleChange(e, "sex");
											}}>
											Select Sex
										</option>
										<option value='Male'>Male</option>
										<option value='Female'>Female</option>
									</select>
								</div>
								<div className='field'>
									<label>Civil Status: </label>
									<select defaultValue=''>
										<option
											disabled='disabled'
											hidden='hidden'
											value={jobSeeker.civilStatus}
											onChange={(e) => {
												this.props.handleChange(e, "civilStatus");
											}}>
											Civil Status
										</option>
										<option value='Single'>Single</option>
										<option value='Married'>Married</option>
									</select>
								</div>
							</div>
							<div className='birthdate-field'>
								<label>Date of Birth: </label>
								<div className='birthdate'>
									<select
										value={jobSeeker.bMonth}
										onChange={(e) => {
											this.props.handleChange(e, "bMonth");
										}}>
										<option disabled='disabled' hidden='hidden'>
											Month
										</option>
										<option value={1}>January</option>
										<option value={2}>February</option>
										<option value={3}>March</option>
										<option value={4}>April</option>
										<option value={5}>May</option>
										<option value={6}>June</option>
										<option value={7}>July</option>
										<option value={8}>August</option>
										<option value={9}>September</option>
										<option value={10}>October</option>
										<option value={11}>November</option>
										<option value={12}>December</option>
									</select>

									<select
										value={jobSeeker.bDay}
										onChange={(e) => {
											this.props.handleChange(e, "bDay");
										}}>
										<option disabled='disabled' hidden='hidden'>
											Day
										</option>
										{birthDay}
									</select>

									<select
										value={jobSeeker.bYear}
										onChange={(e) => {
											this.props.handleChange(e, "bYear");
										}}>
										<option disabled='disabled' hidden='hidden'>
											Year
										</option>
										{birthYear}
									</select>
								</div>
							</div>
							<div className='field'>
								<label>Contact Number: </label>
								<input
									type='text'
									placeholder='Contact Number'
									value={jobSeeker.contactNumber}
									onChange={(e) => {
										this.props.handleChange(e, "contactNumber");
									}}
								/>
							</div>
							<div className='field'>
								<label>Email Address: </label>
								<input
									type='text'
									placeholder='Email Address'
									value={jobSeeker.email}
									onChange={(e) => {
										this.props.handleChange(e, "email");
									}}
								/>
							</div>
							<div className='field'>
								<label>Educational Attainment: </label>
								<input
									aria-multiline
									type='text'
									placeholder='Educational Attainment'
									value={jobSeeker.educationalAttainment}
									onChange={(e) => {
										this.props.handleChange(
											e,
											"educationalAttainment"
										);
									}}
								/>
							</div>
							<div className='field'>
								<label>Job Summary: </label>
								<textarea
									placeholder='Job Experience Summary'
									rows='5'
								/>
							</div>
							<div className='field'>
								<label>Attach your resume here (if necessary): </label>
								<input type='file' />
							</div>
						</div>

						<button
							onClick={(e) => {
								e.preventDefault();
								this.viewModal();
							}}>
							Send Application
						</button>

						{this.state.isModalOpen ? (
							<Modal
								headText='Confirmation Dialog'
								modalText='Continue sending your application?'
								confirmText='Send'
								closeText='Back'
								close={this.onCloseModal}
								confirm={this.handleSubmit}
								path={`/${this.props.activePage}`}
							/>
						) : (
							""
						)}
					</form>
				</div>
			</div>
		);
	}
}

export default ApplicationForm;
