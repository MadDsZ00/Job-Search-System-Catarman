import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import shortid from "shortid";
import AddUser from "../Images/AddUser.png";
import Eye from "../Images/Eye.png";
import LeftArrow from "../Images/LeftArrow.png";
import "./Login.css";
import AuthIndication from "./AuthIndication";

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
		isValid: true,
		isPasswordMatch: true,
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
			isValid: true,
			isPasswordMatch: true,
		});
	};

	handleSignUp = async () => {
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
			await this.setState({
				isValid: false,
			});
		} else {
			if (user.role === "Job Seeker") {
				if (user.password !== user.confirmPassword) {
					await this.setState({
						isPasswordMatch: false,
					});
				} else {
					await this.setState({
						isValid: true,
					});
					this.props.toggleSignUp(true);
					this.props.registerJobSeeker(signUpUser);
				}
			} else if (user.role === "Employer") {
				this.props.registerEmployer(signUpUser);
			}
		}
	};

	handleSubmitNext = async (e) => {
		e.preventDefault();
		const user = this.state;
		if (
			user.firstName === "" ||
			user.lastName === "" ||
			user.middleName === "" ||
			user.role === ""
		) {
			this.setState({
				isValid: false,
			});
		} else {
			await this.setState({
				step: 2,
				isValid: true,
			});
		}
	};

	handleSubmitPrev = async (e) => {
		e.preventDefault();

		await this.setState({
			step: 1,
			isValid: true,
		});
	};

	toggleSignUpFalse = () => {
		this.props.toggleSignUp(false);
	};

	render() {
		const {
			firstName,
			middleName,
			lastName,
			role,
			sex,
			username,
			password,
			confirmPassword,
		} = this.state;
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
							{this.state.isValid === false && (
								<div className='error-container'>
									<div className='error-wrapper'>
										<p>Fill in all the fields please...</p>
									</div>
								</div>
							)}
							{this.state.isPasswordMatch === false && (
								<div className='error-container'>
									<div className='error-wrapper'>
										<p>Password Confirmation Error!</p>
									</div>
								</div>
							)}
							{this.props.isSignUp === true && (
								<AuthIndication
									method={this.toggleSignUpFalse}
									delay={5}
								/>
							)}
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
										value={firstName}
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
										value={middleName}
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
										value={lastName}
									/>
								</div>
							</div>
							<div className='login-form'>
								<div className='input-field'>
									<select
										name='Role'
										onChange={(e) => {
											this.handleChange(e, "role");
										}}
										value={role}>
										<option
											disabled='disabled'
											hidden='hidden'
											value=''>
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
						<div className='form-login'>
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
										value={username}
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
										value={password}
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
										value={confirmPassword}
									/>
								</div>
							</div>
							<div className='login-form'>
								<div className='input-field'>
									<select
										name='Sex'
										onChange={(e) => {
											this.handleChange(e, "sex");
										}}
										value={sex}>
										<option
											disabled='disabled'
											hidden='hidden'
											value=''>
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
									onClick={(e) => this.handleSubmitPrev(e)}>
									Back
								</button>
								<button
									className='dual-sign-in'
									onClick={this.handleSignUp}>
									Sign In
								</button>
							</div>
						</div>
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
						Already have an account?{" "}
						<Link
							to='/login'
							onClick={() => {
								this.props.toggleSignUp(false);
							}}>
							Login
						</Link>
					</p>
				</div>
			</div>
		);
	}
}

export default SignUp;
