import "./App.css";
import Home from "./Home-Folder/Home";
import Profile from "./Profile-Folder/Profile";
import Notification from "./Notification-Folder/Notification";
import Menu from "./Menu-Folder/Menu";
import Employer1 from "./Images/Employer1.jpg";
import Employer2 from "./Images/Employer2.jpg";
import Employer3 from "./Images/Employer3.jpg";
import Employer4 from "./Images/Employer4.jpg";
import Employer5 from "./Images/Employer5.jpg";
import Employer6 from "./Images/Employer6.jpg";
import Employer7 from "./Images/Employer7.jpg";
import Employer8 from "./Images/Employer8.jpg";
import Employer9 from "./Images/Employer9.jpg";
import Employer10 from "./Images/Employer10.jpg";
import Employer11 from "./Images/Employer11.jpg";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Menu-Folder/OutsideLinks/About";
import Contact from "./Menu-Folder/OutsideLinks/Contact";
import Help from "./Menu-Folder/OutsideLinks/Help";
import Settings from "./Menu-Folder/OutsideLinks/Settings";
import TermsAndCondition from "./Menu-Folder/OutsideLinks/TermsAndCondition";
import CompanyProfile from "./Home-Folder/CompanyProfile";
import ApplicationForm from "./Home-Folder/ApplicationForm";
import Login from "./Account-Folder/Login";
import SignUp from "./Account-Folder/SignUp";
import LandingPage from "./LandingPage";
import JobSeeker from "./Account-Folder/JobSeeker";
import Employer from "./Account-Folder/Employer";
import Route1 from "./Account-Folder/Route1";
import Route2 from "./Account-Folder/Route2";
import Route3 from "./Account-Folder/Route3";
import UnknownPage from "./Account-Folder/UnknownPage";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import SearchEngine from "./SearchEngine";
import shortid from "shortid";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			infos: [],
			showAddTask: [],
			isLogin: [],
			activePage: [],
			scrollPosition: [],
			jobSeeker: {},
			targetCompany: [],
			hasApplied: [],
			isDeleted: [],
			user: {
				jobSeeker: [],
				employer: [],
			},
			appliedJobs: [],
		};
	}

	componentDidMount() {
		this.setState({
			infos: [
				{
					id: "CPWxK-ynh",
					companyName: "Persona",
					timeStamp: {
						min: 33,
						hour: 17,
						day: 19,
						month: 9,
						year: 2021,
					},
					companyAddress: "UEP, Zone 2",
					jobTitle: "Virtual Assistant (Work from Home)",
					category: "Information Technology",
					reqNoEmp: 5,
					salary: "45,000 - 70,000",
					jobType: "Full-time",
					prefSex: "Male/Female",
					qualification:
						"Graduated from a distinguished university with, Proven success in school or at work, Professional presentation on resume and online, Full time availability (40+ hours per week), Capable of working any time between 9 AM to 9 PM Pacific Standard Time (12 AM to 12 PM Philippine Time), No other work commitments",
					requirement:
						"1-4 Years Experienced Employee, Reliable and goal-oriented, Dedicated and committed, A team player who enjoys helping others, Self-motivated and capable of thriving in a fast-paced corporate environment, A quick learner who is eager to learn new things, Strong organizational, project management, and problem-solving skills, Impeccable multi-tasking abilities, Friendly and professional demeanor, Exceptional interpersonal skills",
					description:
						"We are looking for anyone with exceptional English and a good command of technology to join our team and work with our highly successful clients and their companies. No prior experience is required, but there will be plenty of opportunities to apply the skills you already have while challenging yourself and learning new things – all while working from home.",
					employerName: "LeBron James",
					imageURL: Employer1,
					isApplied: false,
					status: "Closed",
				},
				{
					id: "Ldm2rEiu4l",
					companyName: "Lux Corporation",
					timeStamp: {
						min: 42,
						hour: 5,
						day: 24,
						month: 1,
						year: 2021,
					},
					companyAddress: "University of Eastern Philippines",
					jobTitle: "UNITY PROGRAMMER",
					category: "Business and Accounting",
					reqNoEmp: 11,
					salary: "30,000 - 60,000",
					jobType: "Contract",
					prefSex: "Male/Female",
					qualification:
						"•Bachelor Degree of IT related. •Who has experience in 3D game developing especially in Unity program. •Who has a portfolio.",
					requirement:
						"1-4 Years Experienced Employee, Bachelor's/College Degree",
					description:
						"Do the production of the VR housing exhibition hall. (Our staff will create the background of 3DCG.) •Advising on technical requirements for project pitches.  •Work solo design and develop commercial Interactive 3D •Write polished, optimized, and documented code with an eye towards re-usability for multiple projects. •Assist the team in planning and prioritization of work. •Create a moving Avatar in VR world.  •Create a moving Avatar and Chat and Voice chat in VR world. •Other duties if necessary.",
					employerName: "Tito Cabili",
					imageURL: Employer2,
					isApplied: false,
					status: "Active",
				},
				{
					id: "fZHhNCQPLV",
					companyName: "Mitsubishi Motors Philippines Corporation",
					timeStamp: {
						min: 4,
						hour: 20,
						day: 9,
						month: 4,
						year: 2021,
					},
					companyAddress: "Brgy. Ambot",
					jobTitle: "Dealer Sales Coordinator",
					category: "Business and Accounting",
					reqNoEmp: 1,
					salary: "23,000",
					jobType: "Full-time",
					prefSex: "Male",
					qualification:
						"Supervisor/5 Years & Up Experienced Employee, Bachelor's/College Degree",
					requirement: "(n/a)",
					description:
						"Coordinate with dealers regarding financing promos and programs of Mitsubishi Motors Philippines Corporation (MMPC), Gather information/feedback from dealers regarding financing and bank related concerns., Propose financing promos/programs to increase sales volume., Do competitive & market/industry analysis & survey.",
					employerName: "Derick Rose",
					imageURL: Employer3,
					isApplied: false,
					status: "Active",
				},
				{
					id: "AQ2ABKJhR3",
					companyName: "GP's Diagnostic Trading",
					timeStamp: {
						min: 18,
						hour: 2,
						day: 30,
						month: 4,
						year: 2021,
					},
					companyAddress: "Brgy. Ambot",
					// jobTitle: "HR MANAGER",
					jobTitle: "Sales/ Marketing Representative",
					category: "Business and Accounting",
					reqNoEmp: 5,
					salary: "15,000 - 21,000",
					jobType: "Full-time",
					prefSex: "Male/Female",
					qualification:
						" Candidate must possess at least Bachelor's/College Degree in any field., At least 2 Year(s) of working experience in the related field is required for this position., Highly motivated with excellent communication skills, With Experience selling into Medical Laboratory consumables, Excellent negotiation and consultative sales skills., Proven track record of achieving sales targets., Customer service oriented and highly motivated, Willing to do field work, ability to persuade & influence others:, knowledgeable of sales promotion techniques;, Prepare action plans and schedules to identify specific targets and to project the number of contacts to be made., Establish and maintain current client and potential client relationships, NCR Area",
					requirement:
						"1-4 Years Experienced Employee, Bachelor's/College Degree",
					description: "- Sample Description",
					employerName: "James Naismith",
					imageURL: Employer4,
					isApplied: false,
					status: "Active",
				},
				{
					id: "67IaQOg0iO",
					companyName: "Vismotor Corporation",
					timeStamp: {
						min: 11,
						hour: 1,
						day: 14,
						month: 5,
						year: 2021,
					},
					companyAddress: "Brgy. Dalakit",
					jobTitle: "HR MANAGER",
					category: "Business and Accounting",
					reqNoEmp: 1,
					salary: "40,000 - 60,000",
					jobType: "Full-time",
					prefSex: "Male",
					qualification:
						"Bachelor's/College Degree, Post Graduate Diploma/Master's Degree, Professional License (Passed Board/Bar/Professional License Exam)",
					requirement: "5 years of experience",
					description:
						"Enhances the organization’s human resources by planning, implementing, and evaluating employee relations and human resources policies, programs, and practices., Maintains the work structure by updating job requirements and job descriptions for all positions., Supports organization staff by establishing a recruiting, testing, and interviewing program; counseling managers on candidate selection; conducting and analyzing exit interviews; and recommending changes., Prepares employees for assignments by establishing and conducting orientation and training programs., Manages a pay plan by conducting periodic pay surveys; scheduling and conducting job evaluations; preparing pay budgets; monitoring and scheduling individual pay actions; and recommending, planning, and implementing pay structure revisions., Ensures planning, monitoring, and appraisal of employee work results by training managers to coach and discipline employees; scheduling management conferences with employees; hearing and resolving employee grievances; and counseling employees and supervisors.",
					employerName: "Hulk",
					imageURL: Employer5,
					isApplied: false,
					status: "Active",
				},
				{
					id: "EcuNlrv_hS",
					companyName: "Exypnox Inc",
					timeStamp: {
						min: 14,
						hour: 14,
						day: 27,
						month: 4,
						year: 2021,
					},
					companyAddress: "Brgy. Dalakit",
					jobTitle: "Sales Development Representative",
					category: "Business and Accounting",
					reqNoEmp: 3,
					salary: "55,000 - 85,000",
					jobType: "Full-time",
					prefSex: "Male",
					qualification:
						"Must live in Manila metro area within commuting distance to Makati City, 3+ of experience in a sales role, Excellent written and verbal communication skills, Familiarity with CRMs like Salesforce, Excellent interpersonal, leadership, organizational and communication skills, Proven track record of owning your goals and consistently surpassing them",
					requirement:
						"1-4 Years Experienced Employee, Bachelor's/College Degree",
					description:
						"Exypnox is the local partner of Boostlingo, a San Francisco based tech Startup focused on the Language Services market. Boostlingo's goal is to remove language barriers through technology innovation.",
					employerName: "Hulk",
					imageURL: Employer6,
					isApplied: false,
					status: "Active",
				},
				{
					id: "5wGtYCPM7B",
					companyName: "Virtual Business Staffing",
					timeStamp: {
						min: 4,
						hour: 20,
						day: 9,
						month: 4,
						year: 2021,
					},
					companyAddress: "Brgy. Dalakit",
					jobTitle: "CONTENT COORDINATOR",
					category: "Business and Accounting",
					reqNoEmp: 3,
					salary: "41,600 - 45,700",
					jobType: "Full-time",
					prefSex: "Male",
					qualification:
						"Ability to work against tight deadlines, Candidate must be self-motivated, Candidate must be communicative, Detail oriented, Candidate must be communicative, Dependable and responsible, Professional",
					requirement:
						"1-4 Years Experienced Employee, Bachelor's/College Degree",
					description:
						"Provide support for media management work including identification of assets and coordination of work across video files, dubs and subtitle logistics, content registration and original as well as localized meta data (25 languages) and EPG registration in channel management and MAM systems.",
					employerName: "Hulk",
					imageURL: Employer7,
					isApplied: false,
					status: "Closed",
				},
				{
					id: "Vn-GpiYMQr",
					companyName: "Solvento Philippines, Inc.",
					timeStamp: {
						min: 4,
						hour: 4,
						day: 4,
						month: 6,
						year: 2021,
					},
					companyAddress: "Brgy. Dalakit",
					jobTitle: "Senior Technical (IT) Recruitment consultant",
					category: "Business and Accounting",
					reqNoEmp: 2,
					salary: "50,000 - 65,000",
					jobType: "Full-time",
					prefSex: "Male",
					qualification: "(n/a)",
					requirement:
						"5+ years work experience as a Technical Recruiter, Hands-on experience with various interview formats (e.g. phone, MS Teams, Zoom etc.), Technical expertise with an ability to understand and explain job requirements, Familiarity with Applicant Tracking Systems and resume databases, Solid knowledge of sourcing techniques (e.g. social media recruiting and job boards), Excellent verbal and written communication skills, Solid understanding of HR practices and labour legislation",
					description:
						"ETICA Group, is a digital services provider specialising in Project delivery and resourcing to help ensure our clients succeed in today’s ever evolving market. Headquartered in Melbourne Australia with offices strategically located across Asia, we are a trusted partner for firms looking for true cultural and technological transformation.",
					employerName: "Hulk",
					imageURL: Employer8,
					isApplied: false,
					status: "Active",
				},
				{
					id: "RM8Uh3uLvk",
					companyName: "NTT Ltd.",
					timeStamp: {
						min: 4,
						hour: 20,
						day: 19,
						month: 6,
						year: 2021,
					},
					companyAddress: "Brgy. Dalakit",
					jobTitle: "Network Analyst",
					category: "Business and Accounting",
					reqNoEmp: 4,
					salary: "15,000 - 20,000",
					jobType: "Full-time",
					prefSex: "Male",
					qualification: "(n/a)",
					requirement:
						"Must be a graduate of any IT/Engineering related courses, More than 1 year of related experience with background in IT operations, More than 1 year of Network experience., Proficient in routing and switching (CISCO), firewall and VPN (Cisco), OSPF and BGP routing protocol, Must be willing to take technology certifications to keep updated with the company’s product offerings, Knowledgeable with ITIL framework., Knowledgeable on Service Management or Ticketing Tools. (Service Now), Good interpersonal skills/communication skills, A team player, innovative, flexible, pro-active and can handle pressure, Required to work on a shifting schedule., Strong analytical and problem-solving skills., Willing to work on holidays, weekends or render overtime if necessary., Must be able to work emergency schedules during natural disasters and network outages, Must pass a criminal background check and drug test",
					description:
						"The Network Engineer is responsible for the day-today maintenance of the company’s computer networks and its associated Adjuncts (AES, CMS, etc.). They oversee both the hardware and software which is essential to keeping Local Area Networks (LAN) or Wide Area Networks (WAN) running smoothly. The position understands how Network equipment and services work and is equipped to handle disruptions of service and come up with solutions to deal with problems as it may arise. This position is also responsible in analyzing and troubleshooting any technical issues that may arise within the network infrastructure. ",
					employerName: "Hulk",
					imageURL: Employer9,
					isApplied: false,
					status: "Active",
				},
				{
					id: "9p2eWWNmHL",
					companyName: "Universal Robina Corporation - Flour Division",
					timeStamp: {
						min: 48,
						hour: 7,
						day: 13,
						month: 7,
						year: 2021,
					},
					companyAddress: "Brgy. Dalakit",
					jobTitle: "Quality Assurance Analyst",
					category: "Business and Accounting",
					reqNoEmp: 1,
					salary: "20,000 - 25,000",
					jobType: "Full-time",
					prefSex: "Male",
					qualification:
						"Candidate must possess at least a Bachelor's/College Degree , Chemistry or equivalent., At least 1 year(s) of working experience in the related field is required for this position., Licensed Chemist or Chemical Technician., Applicants must be willing to work in Bagong Ilog,Pasig City., Preferably 1-4 Yrs Experienced Employees specializing in Quality Control/Assurance or equivalent., Full-Time position(s) available.",
					requirement:
						"1-4 Years Experienced Employee, Professional License (Passed Board/Bar/Professional License Exam)",
					description:
						"The Quality Assurance Analyst is responsible in checking the physical, chemical and rheological analyses of all incoming and outgoing raw and packaging materials, in-process and finished products. Conducts warehouse inspection and gives recommendation on proper disposition, monitors in-line process and packaging activities, implements QA related activities.",
					employerName: "Hulk",
					imageURL: Employer10,
					isApplied: false,
					status: "Closed",
				},
				{
					id: "CZg47wYgZf",
					companyName: "ETICA Group Pty ltd",
					timeStamp: {
						min: 4,
						hour: 23,
						day: 29,
						month: 8,
						year: 2021,
					},
					companyAddress: "Brgy. Dalakit",
					jobTitle: "Test Specialist - Automation",
					category: "Business and Accounting",
					reqNoEmp: 2,
					salary: "80,000 - 150,000",
					jobType: "Full-time",
					prefSex: "Male",
					qualification:
						"3+ years of experience in test automation, Strong knowledge of tools including Selenium, Experience in building Automation frameworks using build frameworks, Strong experience across Jira, Experience in Azure DevOps, Should have working knowledge of Version Control systems like Bitbucket , Git, SVN etc., Experience in working in a collaborative and distributed Agile environment with minimal direction and supervision, Experience in Agile development practices (BDD, TDD, Pair Programming), Excellent written and verbal communication skills, Self-organised, autonomous and a team player, Strong communication skills, with leadership capability  ",
					requirement:
						"Supervisor/5 Years & Up Experienced Employee, Bachelor's/College Degree",
					description:
						"ETICA Group, is a digital services provider specialising in Project delivery and resourcing to help ensure our clients succeed in today’s ever evolving market. Headquartered in Melbourne Australia with offices strategically located across Asia, we are a trusted partner for firms looking for true cultural and technological transformation. We have tailored our service offerings to focus on areas of highest benefit for our clients.: Salesforce CRM, SaaS, Project Delivery, Recruitment and Managed Operations.  Our client, Inchcape is a leading automotive distributor, that brings some of the world's best loved brands to customers in more than 36 countries throughout the world. The company is listed on the London Stock Exchange and employs around 15,000 people. The Inchcape Digital team is central to their strategy and is responsible for delivering world class data, digital, technology and cyber services and solutions to their regions and markets. They have big ambitions and as an important member of the Digital Delivery Centre team in the Philippines you will get to work globally and across diverse, challenging and customer facing programs. ",
					employerName: "Hulk",
					imageURL: Employer11,
					isApplied: false,
					status: "Active",
				},
			],
			showAddTask: [false],
			isLogin: false,
			activePage: "home",
			scrollPosition: 0,
			jobSeeker: {
				id: 180461,
				firstName: "Ralf Renz",
				middleName: "Estellana",
				lastName: "Bantilo",
				homeAddress: "Zone 1, Brgy. Poblacion, San Roque, Northern Samar",
				sex: "Male",
				bMonth: 1,
				bDay: 11,
				bYear: 2000,
				contactNumber: "09157275479",
				email: "ralfrenzbantilo853@gmail.com",
				civilStatus: "Single",
				educationalAttainment: "College Undergraduate",
				jobSummary: "",
				resume: "",
			},
			targetCompany: "",
			hasApplied: false,
			isDeleted: false,
			user: {
				jobSeeker: [
					{
						id: "s-vn42XKp",
						lastName: "Bantilo",
						firstName: "Ralf Renz",
						middleName: "Estellana",
						role: "Job Seeker",
						username: "ralf",
						password: "bantilo",
						confirmPassword: "bantilo",
					},
				],
				employer: [
					{
						id: "IvdOEl1vNj",
						lastName: "Bantilo",
						firstName: "Rafael",
						middleName: "Estellana",
						role: "Employer",
						username: "rafael",
						password: "bantilo",
						confirmPassword: "bantilo",
					},
				],
			},
			appliedJobs: [],
		});
	}

	addPost = (post) => {
		const infos = this.state.infos;
		// this.setState({ infos: [post, ...infos] });
		this.setState({ infos: [...infos, post] });
	};

	deletePost = (id) => {
		let infos = this.state.infos;
		let index = infos.findIndex((x) => x.id === id);
		infos.splice(index, 1);
		this.setState({ infos: infos });

		this.setDeleteState();
	};

	setDeleteState = () => {
		this.setState({
			isDeleted: true,
		});
	};

	closeDeleteState = () => {
		this.setState({
			isDeleted: false,
		});
	};

	handleToggle = () => {
		let newValue = !this.state.showAddTask;
		this.setState({ showAddTask: newValue });
	};

	onTogglePostForm = () => {
		this.setState({ showAddTask: !this.state.showAddTask });
	};

	handleLogin = () => {
		this.setState({
			isLogin: !this.state.isLogin,
		});
	};

	handleChangePage = (page) => {
		this.setState({
			activePage: [page],
		});
	};

	handleScroll = () => {
		this.setState({
			scrollPosition: window.pageYOffset,
		});
	};

	handleChange = (event, fieldName) => {
		this.setState((prevState) => ({
			jobSeeker: {
				...prevState.jobSeeker,

				[fieldName]: event.target.value,
			},
		}));
	};

	setCompanyID = (id) => {
		this.setState({
			targetCompany: id,
		});
	};

	handleApplication = (targetCompany) => {
		this.setState((prevState) => ({
			infos: prevState.infos.map((info) =>
				info.id === targetCompany
					? Object.assign(info, { isApplied: true })
					: info
			),
		}));
		this.setApplied();

		{
			this.state.infos.map((info) => {
				const data = {
					id: info.id,
					companyName: info.companyName,
					timeStamp: {
						min: info.timeStamp.min,
						hour: info.timeStamp.hour,
						day: info.timeStamp.day,
						month: info.timeStamp.month + 1,
						year: info.timeStamp.year,
					},
					companyAddress: info.address,
					jobTitle: info.jobTitle,
					category: info.jobCategory,
					reqNoEmp: info.noReqEmp,
					salary: info.salary,
					jobType: info.jobType,
					prefSex: info.prefSex,
					qualification: info.jobQualification,
					requirement: info.jobRequirement,
					description: info.jobDescription,
					employerName: info.employerName,
					imageURL: info.imageURL,
					isApplied: info.isApplied,
					status: info.status,
					dateApplied: {
						min: new Date().getMinutes(),
						hour: new Date().getHours(),
						day: new Date().getDate(),
						month: new Date().getMonth() + 1,
						year: new Date().getFullYear(),
					},
				};

				info.id === targetCompany && this.handleAppliedJobs(data);
			});
		}
	};

	setApplied = () => {
		this.setState({
			hasApplied: true,
		});
	};

	closeHasApplied = () => {
		this.setState({
			hasApplied: false,
		});
	};

	registerJobSeeker = async (user) => {
		const jobSeeker = this.state.user.jobSeeker;
		const employer = this.state.user.employer;
		await this.setState({
			user: {
				jobSeeker: [...jobSeeker, user],
				employer: [...employer],
			},
		});

		console.log(this.state.user.jobSeeker);
	};

	registerEmployer = async (user) => {
		const jobSeeker = this.state.user.jobSeeker;
		const employer = this.state.user.employer;
		await this.setState({
			user: {
				jobSeeker: [...jobSeeker],
				employer: [...employer, user],
			},
		});

		console.log(this.state.user.employer);
	};

	handleAppliedJobs = (job) => {
		const appliedJobs = this.state.appliedJobs;

		this.setState({
			appliedJobs: [job, ...appliedJobs],
		});
	};

	render() {
		return (
			// <div className='app'>
			// 	<Router>
			// 		<Switch>
			// 			<Route
			// 				exact
			// 				path='/login'
			// 				render={() => (
			// 					<Login
			// 						handleLogin={this.handleLogin}
			// 						user={this.state.user}
			// 					/>
			// 				)}
			// 			/>
			// 			<Route exact path='/signup' render={() => <SignUp />} />
			// 			<Route exact path='/' component={LandingPage} />
			// 			<Route exact path='/employer' component={Employer} />
			// 			<Route exact path='/jobseeker' component={JobSeeker} />

			// 			<Route exact path='/jobseeker/route1' component={Route1} />
			// 			<Route exact path='/jobseeker/route2' component={Route2} />
			// 			<Route exact path='/jobseeker/route3' component={Route3} />

			// 			<Route
			// 				exact
			// 				path='*'
			// 				component={() => (
			// 					<div>
			// 						<Link to='/'>Back</Link>
			// 						<h2>Page not Found!</h2>
			// 					</div>
			// 				)}
			// 			/>
			// 		</Switch>
			// 	</Router>
			// </div>

			<div className='app'>
				<Router>
					<Switch>
						<Route
							exact
							path='/login'
							render={() => (
								<Login
									handleLogin={this.handleLogin}
									user={this.state.user}
								/>
							)}
						/>
						<Route
							exact
							path='/signup'
							component={() => (
								<SignUp
									registerJobSeeker={this.registerJobSeeker}
									registerEmployer={this.registerEmployer}
								/>
							)}
						/>
						<Route exact path='/' component={LandingPage} />

						<Route
							exact
							path='/home'
							// component={() => (
							// 	<JobSeeker
							// 		infos={this.state.infos}
							// 		activePage={this.state.activePage}
							// 	/>
							// )}
							render={() => (
								<Home
									activePage={this.state.activePage}
									infos={this.state.infos}
									onDelete={this.deletePost}
									handleChangePage={this.handleChangePage}
									scrollPosition={this.state.scrollPosition}
									handleScroll={this.handleScroll}
									setCompanyID={this.setCompanyID}
									hasApplied={this.state.hasApplied}
									closeHasApplied={this.closeHasApplied}
									isDeleted={this.state.isDeleted}
									closeDeleteState={this.closeDeleteState}
									jobSeeker={this.state.jobSeeker}
								/>
							)}
						/>
						<Route
							exact
							path='/profile'
							render={() => (
								<Profile
									activePage={this.state.activePage}
									onAdd={this.onTogglePostForm}
									showAdd={this.state.showAddTask}
									onAddPost={this.addPost}
									toggle={this.handleToggle}
									infos={this.state.infos}
									handleChangePage={this.handleChangePage}
									targetCompany={this.state.targetCompany}
									jobSeeker={this.state.jobSeeker}
									appliedJobs={this.state.appliedJobs}
									setCompanyID={this.setCompanyID}
								/>
							)}
						/>
						<Route
							exact
							path='/notification'
							render={() => (
								<Notification
									activePage={this.state.activePage}
									handleChangePage={this.handleChangePage}
									jobSeeker={this.state.jobSeeker}
								/>
							)}
						/>
						<Route
							exact
							path='/menu'
							render={() => (
								<Menu
									activePage={this.state.activePage}
									handleChangePage={this.handleChangePage}
									jobSeeker={this.state.jobSeeker}
								/>
							)}
						/>

						{/* Home Sub Components */}
						<Route
							exact
							path={`/${this.state.activePage}/company-profile`}
							render={() => (
								<CompanyProfile
									infos={this.state.infos}
									targetCompany={this.state.targetCompany}
									activePage={this.state.activePage}
								/>
							)}
						/>
						<Route
							exact
							path={`/${this.state.activePage}/apply-now`}
							render={() => (
								<ApplicationForm
									jobSeeker={this.state.jobSeeker}
									handleChange={this.handleChange}
									infos={this.state.infos}
									targetCompany={this.state.targetCompany}
									handleApplication={this.handleApplication}
									activePage={this.state.activePage}
								/>
							)}
						/>
						<Route
							path='/search'
							render={() => (
								<SearchEngine
									activePage={this.state.activePage}
									infos={this.state.infos}
									onDelete={this.deletePost}
									handleChangePage={this.handleChangePage}
									setCompanyID={this.setCompanyID}
									hasApplied={this.state.hasApplied}
									closeHasApplied={this.closeHasApplied}
									isDeleted={this.state.isDeleted}
									closeDeleteState={this.closeDeleteState}
								/>
							)}
						/>

						{/* Menu Sub Components */}
						<Route path='/menu/about' component={About} />
						<Route path='/menu/contact' component={Contact} />
						<Route path='/menu/help' component={Help} />
						<Route path='/menu/settings' component={Settings} />
						<Route
							path='/menu/terms-and-condition'
							component={TermsAndCondition}
						/>

						{/* unknown route */}
						<Route
							path='*'
							render={() => (
								<UnknownPage
									activePage={this.state.activePage}
									isLogin={this.state.isLogin}
								/>
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
