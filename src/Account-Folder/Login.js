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
import WelcomeWindow from "./WelcomeWindow";
import Loading2Blue from "../Images/Loading2Blue.gif";
import Loading2Red from "../Images/Loading2Red.gif";

export class Login extends Component {
	constructor() {
		super();

		this.state = {
			usernameInput: "",
			passwordInput: "",
			role: "Job Seeker",
			isPasswordVisible: false,
			isValid: true,
			isLoggedin: false,
			currentUser: {
				firstName: "",
				lastName: "",
			},
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const usernameInput = this.state.usernameInput;
		const passwordInput = this.state.passwordInput;

		const { user } = this.props;
		const role = this.state.role;

		if (role === "Job Seeker") {
			await this.props.user.jobSeeker.map(async (js) => {
				if (
					js.username === usernameInput &&
					js.password === passwordInput
				) {
					this.setIsLoggedin();

					await this.setState({
						currentUser: {
							firstName: js.firstName,
							lastName: js.lastName,
						},
					});
				} else {
					this.setState({
						isValid: false,
					});
				}
			});
		} else if (role === "Employer") {
			await this.props.user.employer.map(async (emp) => {
				if (
					emp.username === usernameInput &&
					emp.password === passwordInput
				) {
					this.setIsLoggedin();

					await this.setState({
						currentUser: {
							firstName: emp.firstName,
							lastName: emp.lastName,
						},
					});
				} else {
					this.setState({
						isValid: false,
					});
				}
			});
		}
	};

	setIsValidToFalse = () => {
		this.setState({
			isValid: false,
			isLoggedin: false,
		});
	};

	setIsLoggedin = async () => {
		await this.setState({
			isLoggedin: true,
		});
	};

	setNotLoggedin = () => {
		this.setState({
			isLoggedin: false,
		});
	};

	componentDidMount() {
		Auth.setNotAuthenticated();
	}

	render() {
		return (
			<div className='login-container'>
				{this.state.isLoggedin === true && (
					<WelcomeWindow
						roleGif={
							this.state.role === "Job Seeker"
								? Loading2Blue
								: Loading2Red
						}
						method={this.setNotLoggedin}
						delay={3}
						currentUser={this.state.currentUser}
					/>
				)}
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
							{this.state.isValid === false && (
								<div className='error-container'>
									<div className='error-wrapper'>
										<p>User not found!</p>
									</div>
								</div>
							)}
						</div>
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
											isValid: true,
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
											isValid: true,
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
