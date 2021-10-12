import React, { Component } from "react";
import Indication from "../Indication";
import CountDown from "./CountDown";
import "./JobVacancyFormPart1.css";

export class JobVacancyFormPart1 extends Component {
	state = {
		isNotValid: true,
	};

	continue = (e) => {
		const { values } = this.props;

		e.preventDefault();

		if (
			values.jobTitle !== "" &&
			values.jobCategory !== "" &&
			values.noReqEmp !== "" &&
			values.salary !== "" &&
			values.prefSex !== "" &&
			values.jobType !== "" &&
			values.jobQualification !== "" &&
			values.jobRequirement !== "" &&
			values.jobDescription !== ""
		) {
			this.closeIsNotValid();
			this.props.nextStep();
		} else {
			this.setState({
				isNotValid: false,
			});
		}
	};

	closeIsNotValid = () => {
		this.setState({
			isNotValid: true,
		});
	};

	render() {
		const { values, handleChange } = this.props;
		console.log("run");
		return (
			<div className='text-fields'>
				{this.state.isNotValid === false && (
					<Indication
						backgroundcolor='orange'
						text='Make sure to fill-in all the fields!'
						method={this.closeIsNotValid}
						delay={3}
					/>
				)}
				<form className='post-input-container'>
					<h3>--- Job Vacancy Form ---</h3>
					<div className='post-fields'>
						<div className='post-field'>
							<label>Job Title:</label>
							<input
								type='text'
								placeholder='Job Title'
								onChange={handleChange("jobTitle")}
								defaultValue={values.jobTitle}
							/>
						</div>
						<div className='post-field'>
							<label>Job Category:</label>
							<select
								name='Job Category'
								onChange={handleChange("jobCategory")}
								defaultValue={values.jobCategory}>
								<option disabled='disabled' hidden='hidden' value=''>
									Select Job Category
								</option>
								<option value='Finance'>Finance</option>
								<option value='Information Technology'>
									Information Technology
								</option>
								<option value='Education'>Education</option>
								<option value='Accounting'>Accounting</option>
								<option value='Construction'>Construction</option>
								<option value='Others'>Others</option>
							</select>
						</div>
						<div className='post-field-group'>
							<div className='post-field'>
								<label>No. of Employees:</label>
								<input
									type='text'
									placeholder='No. of Employees'
									onChange={handleChange("noReqEmp")}
									defaultValue={values.noReqEmp}
								/>
							</div>
							<div className='post-field'>
								<label>Salary:</label>
								<input
									type='text'
									placeholder='₱ ----'
									onChange={handleChange("salary")}
									defaultValue={values.salary}
								/>
							</div>
						</div>

						<div className='post-field-group'>
							<div className='post-field'>
								<label>Preferred Sex:</label>
								<select
									name='Preferred Sex'
									onChange={handleChange("prefSex")}
									defaultValue={values.prefSex}>
									<option disabled='disabled' hidden='hidden' value=''>
										Select Gender
									</option>
									<option value='Male'>Male</option>
									<option value='Female'>Female</option>
									<option value='Male/Female'>Male/Female</option>
								</select>
							</div>
							<div className='post-field'>
								<label>Job Type:</label>
								<select
									name='Job Type'
									onChange={handleChange("jobType")}
									defaultValue={values.jobType}>
									<option disabled='disabled' hidden='hidden' value=''>
										Select Job Type
									</option>
									<option value='Full-time'>Full-time</option>
									<option value='Part-time'>Part-time</option>
									<option value='Contract'>Contract</option>
									<option value='Urgent Hiring'>Urgent Hiring</option>
									<option value='Temporary'>Temporary</option>
									<option value='Seasonal'>Seasonal</option>
									<option value='Freelance'>Freelance</option>
									<option value='Intern'>Intern</option>
								</select>
							</div>
						</div>
						<div className='job-qualification'>
							<h4>Job Qualifications</h4>
							<textarea
								name='work-experience'
								placeholder=' - Sample 
                            - Job 
                            - Qualifications'
								onChange={handleChange("jobQualification")}
								defaultValue={values.jobQualification}></textarea>
						</div>
						<div className='job-qualification'>
							<h4>Job Requirements</h4>
							<textarea
								name='work-experience'
								placeholder=' - Sample
                            - Job
                            - Requirements'
								onChange={handleChange("jobRequirement")}
								defaultValue={values.jobRequirement}></textarea>
						</div>
						<div className='job-qualification'>
							<h4>Job Description</h4>
							<textarea
								name='work-experience'
								placeholder=' Sample Description'
								onChange={handleChange("jobDescription")}
								defaultValue={values.jobDescription}></textarea>
						</div>

						<div className='post-field'>
							<button onClick={this.continue}>Next</button>
						</div>

						<div className='warning'>
							<p>Reminder: Fill-in all the fields!</p>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default JobVacancyFormPart1;
