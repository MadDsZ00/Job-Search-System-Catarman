import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "./Images/Logo.png";
import SearchIcon from "./Images/SearchIcon.png";
import User from "./Images/User.png";
import "./Header.css";

export class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { firstName } = this.props.jobSeeker;
		let { lastName } = this.props.jobSeeker;

		return (
			<header>
				<div className='header-left'>
					<img src={Logo} alt='Logo' className='logo-image' />

					<Link to='/search'>
						<form className='search-bar'>
							<input type='text' placeholder='Search here' />
							<img
								src={SearchIcon}
								alt='Search'
								className='search-icon-image'
							/>
						</form>
					</Link>
				</div>

				<div className='profile-holder'>
					<h3 className='profile-name'>{`${firstName} ${lastName}`}</h3>
					<Link to='/profile'>
						<div className='account-profile'>
							<img src={User} style={{ height: "60px" }} />
						</div>
					</Link>
				</div>
			</header>
		);
	}
}

export default Header;
