import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Eye from "../Images/Eye.png";
import "./Login.css";
import Auth from "../Auth";
import ProfileIconFilledGray from "../Images/ProfileIconFilledGray.png";
import UsernameIcon from "../Images/UsernameIcon.png";
import PasswordIcon from "../Images/PasswordIcon.png";
import LeftArrow from "../Images/LeftArrow.png";

export class Login extends Component {
	constructor() {
		super();

		this.state = {
			usernameInput: "",
			passwordInput: "",
			role: "Job Seeker",
			isPasswordVisible: false,
			isValid: true,
			errorMessage: "No Errors yet",
			isLoggedin: false,
		};
	}

	push = (path) => {
		this.props.history.push(path);

		// Auth.login(() => {
		// 	this.props.history.push(path);
		// });

		Auth.setAuthenticated();
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const usernameInput = this.state.usernameInput;
		const passwordInput = this.state.passwordInput;

		const { user } = this.props;
		// const [jobSeeker] = user.jobSeeker;
		// const [employer] = user.employer;

		const role = this.state.role;

		if (role === "Job Seeker") {
			this.props.user.jobSeeker.map((js) => {
				if (
					js.username === usernameInput &&
					js.password === passwordInput
				) {
					alert(`Welcome back ${js.firstName} ${js.lastName}`);
					this.push("/home");
				}
			});
		} else if (role === "Employer") {
			this.props.user.employer.map((emp) => {
				if (
					emp.username === usernameInput &&
					emp.password === passwordInput
				) {
					alert(`Welcome back ${emp.firstName} ${emp.lastName}`);
					this.push("/home");
				}
			});
		}
	};

	setIsValidToFalse = () => {
		this.setState({
			isValid: false,
			errorMessage: "Failed to login, Please try again!",
			isLoggedin: false,
		});
	};

	setIsLoggedin = () => {
		this.setState({
			isLoggedin: true,
		});
	};

	componentDidMount() {
		Auth.setNotAuthenticated();
	}

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
								<img src={ProfileIconFilledGray} alt='' />
							</div>
							<div className='select-login-header'>
								<select
									name='Role'
									defaultValue='Job Seeker'
									onChange={(e) => {
										this.setState({
											role: e.target.value,
										});
									}}>
									<option disabled='disabled' hidden='hidden' value=''>
										Select Role
									</option>
									<option value='Job Seeker'>Job Seeker</option>
									<option value='Employer'>Employer</option>
								</select>
							</div>
						</div>
						{this.state.isValid ? (
							""
						) : (
							<div
								className='error-message'
								onClick={() => {
									this.setState({
										isValid: true,
									});
								}}>
								<h4>
									{this.state.errorMessage} {this.state.count}
								</h4>
							</div>
						)}
					</div>

					<form
						className='form-login'
						onSubmit={(e) => this.handleSubmit(e)}>
						<div className='circle-blue' />
						<div className='circle-red' />
						<div className='login-form'>
							<div className='input-field'>
								<div className='login-form-icon'>
									<img src={UsernameIcon} alt='Username Icon' />
								</div>
								<input
									autoFocus
									type='text'
									placeholder='Username'
									onChange={(e) => {
										this.setState({
											usernameInput: e.target.value,
										});
									}}
								/>
							</div>
						</div>
						<div className='login-form'>
							<div className='input-field'>
								<div className='login-form-icon'>
									<img
										src={PasswordIcon}
										alt='Password Icon'
										className='password-icon'
									/>
								</div>
								<input
									type={
										this.state.isPasswordVisible ? "text" : "password"
									}
									placeholder='Password'
									onChange={(e) => {
										this.setState({
											passwordInput: e.target.value,
										});
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

						<button onClick={(e) => this.handleSubmit(e)}>Login</button>
					</form>
					<p>
						Don't have an account yet? <Link to='/signup'>Sign Up</Link>
					</p>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);
