import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Eye from "../Images/Eye.png";
import "./Login.css";
import Auth from "../Auth";

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

		const { user } = this.props;
		const [jobSeeker] = user.jobSeeker;
		const [employer] = user.employer;

		const username = this.state.usernameInput;
		const password = this.state.passwordInput;
		const role = this.state.role;

		if (role === "Job Seeker") {
			if (
				username === jobSeeker.username &&
				password === jobSeeker.password
			) {
				console.log(`Successfully Logged in as a ${role}!`);
				// alert("Successfully Logged in!");
				this.setState({
					errorMessage: "Successfully Logged in!",
				});
				this.push("/home");
				// Auth.login(() => {
				// 	this.props.history.push("/home");
				// });
				this.props.handleLogin();
			} else if (username === jobSeeker.username) {
				console.log("Username is Correct");
				console.log("Password is Incorrect");
			} else if (password === jobSeeker.password) {
				console.log("Username is Incorrect");
				console.log("Password is Correct");
				this.setIsValidToFalse();
			} else {
				console.log("Failed to Login, Please try again");
				this.setIsValidToFalse();
			}
		} else {
			if (username === employer.username && password === employer.password) {
				console.log(`Successfully Logged in as a ${role}!`);
				this.push("/employer");
			} else if (username === employer.username) {
				console.log("Username is Correct");
				console.log("Password is Incorrect");
				this.setIsValidToFalse();
			} else if (password === employer.password) {
				console.log("Username is Incorrect");
				console.log("Password is Correct");
				this.setIsValidToFalse();
			} else {
				console.log("Failed to Login, Please try again");
				this.setIsValidToFalse();
			}
		}

		console.log("Username:", username + " | Password:", password);
	};

	setIsValidToFalse = () => {
		this.setState({
			isValid: false,
			errorMessage: "Failed to login, Please try again!",
			isLoggedin: false,
		});
	};

	componentDidMount() {
		Auth.setNotAuthenticated();
	}

	render() {
		return (
			<div className='login-container'>
				<div className='circle'></div>
				<Link to='/'>
					<button className='login-btn'>Back</button>
				</Link>
				<div className='image-container'>
					<img
						src={Logo}
						alt='Job Search Catarman Logo'
						style={{ height: "100px" }}
					/>
				</div>

				<div className='content'>
					<div className='login-header-container'>
						<div className='login-header'>
							<h3>Logging in as </h3>
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

					<form className='form-login' onSubmit={this.handleSubmit}>
						<div className='login-form'>
							<label>Username:</label>
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
						<div className='login-form'>
							<label>Password:</label>
							<div className='password-field'>
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

						<button onClick={this.handleSubmit}>Login</button>
						<p>
							Don't have an account yet?{" "}
							<Link to='/signup'>Sign Up</Link>
						</p>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);
