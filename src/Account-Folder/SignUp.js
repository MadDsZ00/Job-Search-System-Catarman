import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import shortid from "shortid";
import AddUser from "../Images/AddUser.png";
import UsernameIcon from "../Images/UsernameIcon.png";
import PasswordIcon from "../Images/PasswordIcon.png";
import Eye from "../Images/Eye.png";
import LeftArrow from "../Images/LeftArrow.png";
import "./Login.css";
import Modal from "../JOBSEEKER/Home-Folder/Modal";

export class SignUp extends Component {
	state = {
		firstName: "",
		middleName: "",
		lastName: "",
		role: "",
		sex: "",
		username: "",
		password: "",
		confirmPassword: "",
		step: 1,
		isPasswordVisible: false,
		isModalOpen: false,
	};

	viewModal = (e) => {
		e.preventDefault();
		this.setState({
			isModalOpen: true,
		});
	};

	onCloseModal = () => {
		this.setState({
			isModalOpen: false,
		});
	};

	handleChange = async (event, fieldName) => {
		await this.setState({
			[fieldName]: event.target.value,
		});
	};

	handleSignUp = () => {
		const user = this.state;

		const signUpUser = {
			id: shortid.generate(),
			firstName: user.firstName,
			middleName: user.middleName,
			lastName: user.lastName,
			role: user.role,
			username: user.username,
			password: user.password,
			confirmPassword: user.confirmPassword,
			sex: user.sex,
		};

		if (
			user.firstName === "" ||
			user.lastName === "" ||
			user.middleName === "" ||
			user.role === "" ||
			user.username === "" ||
			user.password === "" ||
			user.confirmPassword === "" ||
			user.sex === ""
		) {
			alert("Error Submitting Entries");
		} else {
			if (user.role === "Job Seeker") {
				this.props.registerJobSeeker(signUpUser);
			} else if (user.role === "Employer") {
				this.props.registerEmployer(signUpUser);
			}
		}
	};

	handleSubmitNext = async (e) => {
		e.preventDefault();

		await this.setState({
			step: 2,
		});
	};

	handleSubmitPrev = async (e) => {
		e.preventDefault();

		await this.setState({
			step: 1,
		});
	};

	render() {
		return (
			<div className='login-container'>
				<div className='login-nav'>
					<Link to='/'>
						<img src={LeftArrow} alt='Go Back' />
					</Link>
					<div className='login-image-container'>
						<img src={Logo} alt='Job Search Catarman Logo' />
					</div>
				</div>

				<div className='login-content'>
					<div className='login-header-container'>
						<div className='login-header'>
							<div className='img-login-header'>
								<img src={AddUser} alt='' />
							</div>
							<div className='select-login-header'>
								<h3>Register User</h3>
							</div>
						</div>
					</div>

					{this.state.step === 1 && (
						<form
							className='form-login'
							onSubmit={(e) => this.handleSubmitNext(e)}>
							<div className='circle-blue' />
							<div className='circle-red' />
							<div className='login-form'>
								<div className='input-field'>
									<input
										autoFocus
										type='text'
										placeholder='First Name'
										onChange={(e) => {
											this.handleChange(e, "firstName");
										}}
									/>
								</div>
							</div>
							<div className='login-form'>
								<div className='input-field'>
									<input
										type='text'
										placeholder='Middle Name'
										onChange={(e) => {
											this.handleChange(e, "middleName");
										}}
									/>
								</div>
							</div>
							<div className='login-form'>
								<div className='input-field'>
									<input
										type='text'
										placeholder='Last Name'
										onChange={(e) => {
											this.handleChange(e, "lastName");
										}}
									/>
								</div>
							</div>
							<div className='login-form'>
								<div className='input-field'>
									<select
										name='Role'
										defaultValue='Job Seeker'
										onChange={(e) => {
											this.handleChange(e, "role");
										}}>
										<option
											disabled='disabled'
											hidden='hidden'
											value='Job Seeker'>
											Select Role
										</option>
										<option value='Job Seeker'>Job Seeker</option>
										<option value='Employer'>Employer</option>
									</select>
								</div>
							</div>

							<button onSubmit={(e) => this.handleSubmitNext(e)}>
								Next
							</button>
						</form>
					)}

					{this.state.step === 2 && (
						<form
							className='form-login'
							onSubmit={(e) => this.viewModal(e)}>
							<div className='circle-blue' />
							<div className='circle-red' />

							<div className='login-form'>
								<div className='input-field'>
									<input
										autoFocus
										type='text'
										placeholder='Set Username'
										onChange={(e) => {
											this.handleChange(e, "username");
										}}
									/>
								</div>
							</div>
							<div className='login-form'>
								<div className='input-field'>
									<input
										type={
											this.state.isPasswordVisible
												? "text"
												: "password"
										}
										placeholder='Set Password'
										onChange={(e) => {
											this.handleChange(e, "password");
										}}
									/>
									<img
										style={
											this.state.isPasswordVisible
												? { opacity: "100%" }
												: {}
										}
										src={Eye}
										alt='Password Visible'
										className='eye'
										onClick={() => {
											this.setState({
												isPasswordVisible:
													!this.state.isPasswordVisible,
											});
										}}
									/>
								</div>
							</div>
							<div className='login-form'>
								<div className='input-field'>
									<input
										type='password'
										placeholder='Confirm Password'
										onChange={(e) => {
											this.handleChange(e, "confirmPassword");
										}}
									/>
								</div>
							</div>
							<div className='login-form'>
								<div className='input-field'>
									<select
										name='Sex'
										defaultValue='Male'
										onChange={(e) => {
											this.handleChange(e, "sex");
										}}>
										<option
											disabled='disabled'
											hidden='hidden'
											value='Male'>
											Select Sex
										</option>
										<option value='Male'>Male</option>
										<option value='Female'>Female</option>
									</select>
								</div>
							</div>
							<div className='dual-button'>
								<button
									className='dual-button-back'
									onSubmit={(e) => this.handleSubmitPrev(e)}>
									Back
								</button>
								<button
									className='dual-sign-in'
									onSubmit={this.viewModal}>
									Sign In
								</button>
							</div>
						</form>
					)}

					<div className='steps'>
						<div
							className='step1'
							style={
								this.state.step === 1
									? { backgroundColor: "#00b2ff" }
									: { backgroundColor: "#4d4d4d" }
							}
						/>
						<div
							className='step2'
							style={
								this.state.step === 1
									? { backgroundColor: "#4d4d4d" }
									: { backgroundColor: "#00b2ff" }
							}
						/>
					</div>
					<p>
						Already have an account? <Link to='/login'>Login</Link>
					</p>
				</div>

				{this.state.isModalOpen ? (
					<Modal
						headText='Successfully Registered'
						modalText='Do you want to get Redirected to Login Page?'
						confirmText='Continue'
						closeText='Cancel'
						close={this.onCloseModal}
						confirm={this.handleSignUp}
						path='/login'
					/>
				) : (
					""
				)}
			</div>
		);
	}
}

export default SignUp;
