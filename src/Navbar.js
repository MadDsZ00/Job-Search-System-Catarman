import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeIconFilled from "./Images/HomeIconFilled.png";
import HomeIconOutlined from "./Images/HomeIconOutlined.png";
import ProfileIconFilled from "./Images/ProfileIconFilled.png";
import ProfileIconOutlined from "./Images/ProfileIconOutlined.png";
import NotificationIconFilled from "./Images/NotificationIconFilled.png";
import NotificationIconOutlined from "./Images/NotificationIconOutlined.png";
import MenuIconFilled from "./Images/MenuIconFilled.png";
import MenuIconOutlined from "./Images/MenuIconOutlined.png";
import "./Navbar.css";

export class Navbar extends Component {
	state = {
		numberOfClick: 0,
		badge: 4,
	};

	handleScrollTop = () => {
		this.setState({
			numberOfClick: this.state.numberOfClick + 1,
			badge: this.state.numberOfClick,
		});

		window.scrollTo(0, 0);
		this.resetNumClick();
	};

	resetNumClick = () => {
		this.setState({
			numberOfClick: 0,
		});
	};

	render() {
		const active = `${this.props.activePage}`;

		return (
			<div className='navbar-container'>
				<div className='navbar'>
					<Link to='/home' onClick={this.handleScrollTop}>
						<img
							src={active === "home" ? HomeIconFilled : HomeIconOutlined}
							alt='Home Icon Filled'
						/>
					</Link>

					<Link to='/profile'>
						<img
							src={
								active === "profile"
									? ProfileIconFilled
									: ProfileIconOutlined
							}
							alt='Profile Icon Outlined'
						/>
					</Link>

					<Link to='/notification'>
						<div className='img-wrapper'>
							{this.state.badge === 0 ? (
								""
							) : (
								<div className='badge'>
									<p>{this.state.badge}</p>
								</div>
							)}
							<img
								src={
									active === "notification"
										? NotificationIconFilled
										: NotificationIconOutlined
								}
								alt='Notification Icon Outlined'
							/>
						</div>
					</Link>

					<Link to='/menu'>
						<img
							src={active === "menu" ? MenuIconFilled : MenuIconOutlined}
							alt='Menu Icon Outlined'
						/>
					</Link>
				</div>
				<div className='space'></div>
			</div>
		);
	}
}

export default Navbar;
