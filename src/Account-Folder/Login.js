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
				<div className='circle'></div>
				<Link to='/'>
					<button>Back</button>
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
