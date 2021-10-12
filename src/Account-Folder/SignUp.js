import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import "./Login.css";

export class SignUp extends Component {
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
							<input type='text' placeholder='First Name' />
						</div>
						<div className='login-form'>
							<label>Last Name:</label>
							<input type='text' placeholder='Last Name' />
						</div>
						<div className='login-form'>
							<label>Role:</label>
							<select name='Role' defaultValue=''>
								<option disabled='disabled' hidden='hidden' value=''>
									Select Role
								</option>
								<option value='Job Seeker'>Job Seeker</option>
								<option value='Employer'>Employer</option>
							</select>
						</div>

						<div className='login-form'>
							<label>Username:</label>
							<input type='text' placeholder='Username' />
						</div>
						<div className='login-form'>
							<label>Password:</label>
							<input type='password' placeholder='Password' />
						</div>
						<div className='login-form'>
							<label>Password Confirmation:</label>
							<input type='password' placeholder='Retype Password' />
						</div>

						<button onClick={(e) => e.preventDefault()}>Sign Up</button>

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
