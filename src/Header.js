import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "./Images/Logo.png";
import SearchIcon from "./Images/SearchIcon.png";
import User from "./Images/User.png";
import "./Header.css";
import SearchEngine from "./SearchEngine";

export class Header extends Component {
	state = {
		text: "",
	};

	setText = (e) => {
		this.setState({
			text: e,
		});
	};

	gotoSearch = () => {
		this.props.history.push("/search");
	};

	render() {
		let { firstName } = this.props.jobSeeker;
		let { lastName } = this.props.jobSeeker;

		return (
			<header>
				<div className='header-left'>
					<img src={Logo} alt='Logo' className='logo-image' />

					<form className='search-bar' onClick={this.gotoSearch}>
						<input
							type='text'
							placeholder='Search here'
							onChange={(e) => {
								this.setText(e.target.value);
							}}
						/>
						<img
							src={SearchIcon}
							alt='Search'
							className='search-icon-image'
						/>
					</form>
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

export default withRouter(Header);
