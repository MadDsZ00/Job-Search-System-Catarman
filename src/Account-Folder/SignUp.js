import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import "./Login.css";
import shortid from "shortid";

export class SignUp extends Component {
	state = {
		firstName: "",
		middleName: "",
		lastName: "",
		role: "",
		username: "",
		password: "",
		confirmPassword: "",
	};

	handleChange = async (event, fieldName) => {
		await this.setState({
			[fieldName]: event.target.value,
		});
	};

	handleSignUp = (e) => {
		e.preventDefault();

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
		};

		if (
			user.firstName === "" &&
			user.lastName === "" &&
			user.middleName === "" &&
			user.role === "" &&
			user.username === "" &&
			user.password === "" &&
			user.confirmPassword === ""
		) {
			alert("Error Submitting Entries");
		} else {
			if (user.role === "Job Seeker") {
				this.props.registerJobSeeker(signUpUser);
			} else if (user.role === "Employer") {
				this.props.registerEmployer(signUpUser);
			}
		}

		console.log(signUpUser);
	};

	render() {
		return (
			<div className='login-container'>
				<div className='signup-circle'></div>
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
					<h3>Create an Account</h3>

					<form className='form-login' onClick={this.handleLogin}>
						<div className='login-form'>
							<label>First Name:</label>
							<input
								autoFocus
								type='text'
								placeholder='First Name'
								onChange={(e) => this.handleChange(e, "firstName")}
							/>
						</div>
						<div className='login-form'>
							<label>Middle Name:</label>
							<input
								type='text'
								placeholder='Middle Name'
								onChange={(e) => this.handleChange(e, "middleName")}
							/>
						</div>
						<div className='login-form'>
							<label>Last Name:</label>
							<input
								type='text'
								placeholder='Last Name'
								onChange={(e) => this.handleChange(e, "lastName")}
							/>
						</div>
						<div className='login-form'>
							<label>Role:</label>
							<select
								name='Role'
								defaultValue=''
								onChange={(e) => this.handleChange(e, "role")}>
								<option disabled='disabled' hidden='hidden' value=''>
									Select Role
								</option>
								<option value='Job Seeker'>Job Seeker</option>
								<option value='Employer'>Employer</option>
							</select>
						</div>

						<div className='login-form'>
							<label>Username:</label>
							<input
								type='text'
								placeholder='Username'
								onChange={(e) => this.handleChange(e, "username")}
							/>
						</div>
						<div className='login-form'>
							<label>Password:</label>
							<input
								type='password'
								placeholder='Password'
								onChange={(e) => this.handleChange(e, "password")}
							/>
						</div>
						<div className='login-form'>
							<label>Password Confirmation:</label>
							<input
								type='password'
								placeholder='Retype Password'
								onChange={(e) =>
									this.handleChange(e, "confirmPassword")
								}
							/>
						</div>

						<button onClick={(e) => this.handleSignUp(e)}>Sign Up</button>

						<p>
							Already have an Account? <Link to='/login'>Login</Link>
						</p>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUp;
