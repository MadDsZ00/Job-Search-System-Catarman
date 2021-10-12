import React, { Component } from "react";
import FormBanner from "./Images/FormBanner.png";
import undraw_quitting from "./Images/undraw_quitting.svg";
import undraw_interview from "./Images/undraw_interview.svg";
import Icon1 from "./Images/Icon1.png";
import Icon2 from "./Images/Icon2.png";
import Icon3 from "./Images/Icon3.png";
import Icon4 from "./Images/Icon4.png";
import Icon5 from "./Images/Icon5.png";
import Icon6 from "./Images/Icon6.png";
import "./LandingPage.css";
import Footer from "./Home-Folder/Footer";
import { Link } from "react-router-dom";
import Auth from "./Auth";

export class LandingPage extends Component {
	componentDidMount() {
		Auth.setNotAuthenticated();
	}
	render() {
		return (
			<div className='landing-page-container'>
				<Link to='/login'>
					<button className='login-btn'>Login</button>
				</Link>

				<div className='page1'>
					<div className='title-holder'>
						<h2>
							Welcome to <strong>Job Search System</strong> in Catarman,
							Northern Samar
						</h2>
						<img src={FormBanner} alt='No Title Yet' />
						<p>
							Are you looking for a job or trying to find an applicant?
							Don't worry, we got you covered.
						</p>
					</div>
				</div>

				<div className='page'>
					<img src={undraw_quitting} alt='' />
					<div className='page-content'>
						<div className='page-title'>
							<h2>Are you looking for a job?</h2>
							<p>Find a job that you like</p>
						</div>
						<div className='page-cards'>
							<div className='page-card'>
								<div className='img-container'>
									<img src={Icon1} alt='' />
								</div>
								<p>Create an account as a Job Seeker</p>
							</div>

							<div className='page-card'>
								<div className='img-container'>
									<img src={Icon2} alt='' />
								</div>
								<p>Search for a job that you like</p>
							</div>

							<div className='page-card'>
								<div className='img-container'>
									<img src={Icon3} alt='' />
								</div>
								<p>Apply for a job</p>
							</div>
						</div>
					</div>

					<Link to='/signup'>
						<button>Register as a Job Seeker</button>
					</Link>
				</div>

				<div className='page'>
					<img src={undraw_interview} alt='' />
					<div className='page-content'>
						<div className='page-title'>
							<h2>Are you looking for skilled applicants?</h2>
							<p>
								Start searching for applicants who fit your job
								requirement
							</p>
						</div>
						<div className='page-cards'>
							<div className='page-card'>
								<div className='img-container'>
									<img src={Icon4} alt='' />
								</div>
								<p>Create an account as an Employer</p>
							</div>

							<div className='page-card'>
								<div className='img-container'>
									<img src={Icon5} alt='' />
								</div>
								<p>Verify applicants</p>
							</div>

							<div className='page-card'>
								<div className='img-container'>
									<img src={Icon6} alt='' />
								</div>
								<p>Post a job vacancy</p>
							</div>
						</div>
					</div>

					<Link to='/signup'>
						<button>Register as an Employer</button>
					</Link>
				</div>

				<Footer />
			</div>
		);
	}
}

export default LandingPage;
