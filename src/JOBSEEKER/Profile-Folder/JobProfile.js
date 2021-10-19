import React, { Component } from "react";
import "./JobProfile.css";
import EditProfileIcon from "../../Images/EditProfileIcon.png";

export class JobProfile extends Component {
	constructor() {
		super();
		this.state = {
			visible: true,
			firstName: "Ralf Renz",
			middleName: "Estellana",
			lastName: "Bantilo",
			sex: "Male",
			contactNumber: "09157275479",
			email: "ralfrenzbantilo853@gmail.com",
			birthdate: "2000-01-11",
			address: "San Roque, Northern Samar",
			preferredJob: "Software Developer",
			interest:
				"Web Development, Java Development, Full Stack Development, UI/UX Design",
			goodAt: "Designing interfaces, Working with group/team, Flexible",
			credentials:
				"University: University of Eastern Philippines (Catarman, Northern Samar), Course: BS Information Technology, Language: Java & Javascript (ReactJS)",
		};
	}

	handleToggleEditProfile = () => {
		this.setState({ visible: !this.state.visible });
	};

	handleChange = (event, fieldName) => {
		this.setState({
			[fieldName]: event.target.value,
		});
	};

	render() {
		return (
			<div className='job-profile-container'>
				<h3>Job Seeker Profile</h3>
				<img
					src={EditProfileIcon}
					alt='Edit Profile Details'
					title={
						this.state.visible
							? "Close Profile Details"
							: "Edit Profile Details"
					}
					onClick={this.handleToggleEditProfile}
				/>

				<div className='profile-detail'>
					<div
						className='basic-info'
						style={{ display: this.state.visible ? "" : "none" }}>
						<h3>Basic Information</h3>
						<div className='basic-info-field'>
							<div className='field'>
								<label>First Name:</label>
								<input
									name='firstName'
									type='text'
									placeholder='First Name'
									value={this.state.firstName}
									onChange={(event) => {
										this.handleChange(event, "firstName");
									}}
								/>
							</div>

							<div className='field'>
								<label>Middle Name:</label>
								<input
									name='middleName'
									type='text'
									placeholder='Middle Name'
									value={this.state.middleName}
									onChange={(event) => {
										this.handleChange(event, "middleName");
									}}
								/>
							</div>
						</div>
						<div className='basic-info-field'>
							<div className='field'>
								<label>Last Name:</label>
								<input
									name='lastName'
									type='text'
									placeholder='Last Name'
									value={this.state.lastName}
									onChange={(event) => {
										this.handleChange(event, "lastName");
									}}
								/>
							</div>

							<div className='field'>
								<label>Email Address:</label>
								<input
									type='email'
									name='email'
									placeholder='Email Address'
									value={this.state.email}
									onChange={(event) => {
										this.handleChange(event, "email");
									}}
								/>
							</div>
						</div>
						<div className='basic-info-field-group'>
							<div className='field'>
								<label>Birthdate:</label>
								<input
									type='date'
									name='birthdate'
									value={this.state.birthdate}
									onChange={(event) => {
										this.handleChange(event, "birthdate");
									}}
								/>
							</div>

							<div className='field'>
								<label>Sex:</label>
								<select
									name='sex'
									defaultValue={this.state.sex}
									onChange={(event) => {
										this.handleChange(event, "sex");
									}}>
									<option disabled='disabled' hidden='hidden' value=''>
										Select Sex
									</option>
									<option value='Male'>Male</option>
									<option value='Female'>Female</option>
								</select>
							</div>
						</div>
						<div className='basic-info-field'>
							<div className='field'>
								<label>Contact No.:</label>
								<input
									name='contactNumber'
									type='text'
									placeholder='Contact Number'
									value={this.state.contactNumber}
									onChange={(event) => {
										this.handleChange(event, "contactNumber");
									}}
								/>
							</div>
							<div className='field'>
								<label>Home Address:</label>
								<input
									name='address'
									type='text'
									placeholder='Home Address'
									value={this.state.address}
									onChange={(event) => {
										this.handleChange(event, "address");
									}}
								/>
							</div>
						</div>
					</div>

					<div
						className='profession-info'
						style={{ display: this.state.visible ? "" : "none" }}>
						<h3>Profession</h3>
						<div className='field'>
							<label>Preferred Job/s:</label>
							<input
								name='preferredJob'
								type='text'
								value={this.state.preferredJob}
								onChange={(event) => {
									this.handleChange(event, "preferredJob");
								}}
							/>
						</div>
						<div className='field'>
							<label>Interested in:</label>
							<textarea
								name='interest'
								id='textarea'
								cols='30'
								rows='10'
								value={this.state.interest}
								onChange={(event) => {
									this.handleChange(event, "interest");
								}}></textarea>
						</div>
						<div className='field'>
							<label>Good at:</label>
							<textarea
								name='goodAt'
								id='textarea'
								cols='30'
								rows='10'
								value={this.state.goodAt}
								onChange={(event) => {
									this.handleChange(event, "goodAt");
								}}></textarea>
						</div>
						<div className='field'>
							<label>Credentials:</label>
							<textarea
								name='credentials'
								id='textarea'
								cols='30'
								rows='10'
								value={this.state.credentials}
								onChange={(event) => {
									this.handleChange(event, "credentials");
								}}></textarea>
						</div>
					</div>

					<div
						className='save-update'
						style={{ display: this.state.visible ? "" : "none" }}>
						<button>Save Update</button>
					</div>
				</div>
			</div>
		);
	}
}

export default JobProfile;
