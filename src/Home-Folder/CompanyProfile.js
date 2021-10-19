import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CompanyProfile.css";
import LeftArrow from "../Images/LeftArrow.png";
export class CompanyProfile extends Component {
	state = {
		id: "",
		companyName: "",
		timeStamp: "",
		companyAddress: "",
		jobTitle: "",
		category: "",
		reqNoEmp: {},
		salary: "",
		jobType: "",
		prefSex: "",
		qualification: "",
		requirement: "",
		description: "",
		employerName: "",
		imageURL: {},
		isApplied: "",
	};

	filterObject = () => {
		this.props.infos.map((info) => {
			if (info.id === this.props.targetCompany) {
				this.setState({
					id: info.id,
					companyName: info.companyName,
					timeStamp: info.timeStamp,
					companyAddress: info.companyAddress,
					jobTitle: info.jobTitle,
					category: info.category,
					reqNoEmp: info.reqNoEmp,
					salary: info.salary,
					jobType: info.jobType,
					prefSex: info.prefSex,
					qualification: info.qualification,
					requirement: info.requirement,
					description: info.description,
					employerName: info.employerName,
					imageURL: info.imageURL,
					isApplied: info.isApplied,
					status: info.status,
				});
			}
		});
	};

	componentDidMount() {
		this.filterObject();
	}

	render() {
		return (
			<div className='company-profile-container'>
				<Link to={`/${this.props.activePage}`}>
					<div className='back-icon-container'>
						<img
							src={LeftArrow}
							alt='back'
							title='Go Back'
							className='back-icon'
						/>
					</div>
				</Link>

				<div className='company-profile-content'>
					<h1>Business Details</h1>
					<div className='company-header'>
						<div className='company-logo'>
							<img src={this.state.imageURL} alt='sample' />
						</div>
						<h3>{this.state.companyName}</h3>
					</div>

					<div className='company-details'>
						<div className='details-container'>
							<div className='detail-left'>
								<h4>Employer:</h4>
							</div>
							<div className='detail-right'>
								<p>{this.state.employerName}</p>
							</div>
						</div>
						<div className='details-container'>
							<div className='detail-left'>
								<h4>Company Address:</h4>
							</div>
							<div className='detail-right'>
								<p>{this.state.companyAddress}</p>
							</div>
						</div>
						<div className='details-container'>
							<div className='detail-left'>
								<h4>Contact Number:</h4>
							</div>
							<div className='detail-right'>
								<p>09129830709</p>
							</div>
						</div>
						<div className='details-container'>
							<div className='detail-left'>
								<h4>Business Description:</h4>
							</div>
							<div className='detail-right'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Quo laudantium, officiis inventore velit
									molestias, sequi consequatur fugit accusantium
									quaerat dolorum dignissimos consequuntur quam ad
									deleniti, pariatur magnam nesciunt ullam rerum?
								</p>
							</div>
						</div>
					</div>
				</div>

				{this.state.isApplied || this.state.status !== "Active" ? (
					<div
						style={{
							fontSize: "12px",
							textAlign: "center",
							color: "red",
						}}>
						{this.state.isApplied
							? "You have applied for this company"
							: ""}
					</div>
				) : (
					<Link to='/home/apply-now'>
						<h3>View Job Vacancy</h3>
					</Link>
				)}
			</div>
		);
	}
}

CompanyProfile.defaultProps = {
	prevPath: "/home",
};

export default CompanyProfile;
