import React, { Component } from "react";
import Confirm from "../Home-Folder/Confirm";
import JobVacancyFormPart1 from "../Home-Folder/JobVacancyFormPart1";
import JobVacancyFormPart2 from "../Home-Folder/JobVacancyFormPart2";
import Success from "../Home-Folder/Success";

export class JobVacancyForm extends Component {
	state = {
		step: 1,
		jobTitle: "",
		jobCategory: "",
		noReqEmp: "",
		salary: "",
		prefSex: "",
		jobType: "",
		jobQualification: "",
		jobRequirement: "",
		jobDescription: "",
		employerName: "Ralf Renz Bantilo",
		contactNo: "09157275479",
		website: "(n/a)",
		address: "Zone 1, Brgy. Poblacion, San Roque, Northern Samar",
	};

	// proceed to the next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	// go back to the prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	toggleView = () => {
		this.props.toggle();
	};

	viewPost = (post) => {
		this.props.onAddPost(post);
	};

	render() {
		const { step } = this.state;
		const {
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
		} = this.state;
		const values = {
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
		};

		switch (step) {
			case 1:
				return (
					<JobVacancyFormPart1
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);

			case 2:
				return (
					<JobVacancyFormPart2
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);

			case 3:
				return (
					<Confirm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={values}
						infos={this.props.infos}
						onAddPost={this.viewPost}
					/>
				);

			case 4:
				return <Success toggle={this.toggleView.bind(this)} />;

			default:
				<p>Default Page</p>;
		}
	}
}

export default JobVacancyForm;
