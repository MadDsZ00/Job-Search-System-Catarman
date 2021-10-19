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
import Logo from "./Images/Logo.png";
import "./LandingPage.css";
import Footer from "./JOBSEEKER/Home-Folder/Footer";
import { Link } from "react-router-dom";
import Auth from "./Auth";

export class LandingPage extends Component {
	componentDidMount() {
		Auth.setNotAuthenticated();
	}
	render() {
		return (
			<div className='landing-page-container'>
				{/* <div className='page1'>
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
				</div> */}

				<div className='page1'>
					<div className='landing-page-upper-panel'>
						<div className='logo-wrapper'>
							<div className='circle1'></div>
							<div className='circle2'></div>
							<img src={Logo} alt='' />
						</div>

						<div className='intro-wrapper'>
							<h3>
								Welcome to Job Search System in Catarman, Northern Samar
							</h3>
							<p>
								Where finding job and employee makes it easier than
								ever.
							</p>
							<Link to='/login'>
								<button className='login-btn'>Login</button>
							</Link>
						</div>
					</div>

					<div className='landing-page-lower-panel'>
						<div className='employer-portion-wrapper'>
							<div className='circle3'></div>
							<div className='employer-portion-text'>
								<h3>Employer Portion</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing
									elit.
								</p>
							</div>

							<img src={Icon1} alt='' />
						</div>

						<div className='job-seeker-portion-wrapper'>
							<div className='circle4'></div>
							<img src={Icon2} alt='' />
							<div className='job-seeker-portion-text'>
								<h3>Job Seeker Portion</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit.
								</p>
							</div>
						</div>
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
