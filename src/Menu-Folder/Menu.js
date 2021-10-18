import React, { Component } from "react";
import Accordion from "./Accordion";
import Accordion2 from "./Accordion2";
import Accordion3 from "./Accordion3";
import Footer from "../Home-Folder/Footer";
import "./Menu.css";
import Navbar from "../Navbar";
import Gap from "../Gap";
import Header from "../Header";
import Modal from "../Home-Folder/Modal";

export class Menu extends Component {
	state = {
		isModalOpen: false,
	};

	viewModal = () => {
		this.setState({
			isModalOpen: true,
		});
	};

	onCloseModal = () => {
		this.setState({
			isModalOpen: false,
		});
	};

	handleLogin = (e) => {
		e.preventDefault();

		// this.props.handleIsLogin();
		console.log("User has been logged out!");
	};

	handleChangePage = async (page) => {
		await this.props.handleChangePage(page);
	};

	componentDidMount = async () => {
		await this.handleChangePage("menu");
	};

	render() {
		return (
			<div className='menu-container'>
				<Header jobSeeker={this.props.jobSeeker} />
				<Navbar activePage='menu' />
				<Gap />

				<h1>Menu Page</h1>

				<div className='menu-content-panel'>
					<div className='menu-main-panel'>
						<div className='accordion'>
							<Accordion />
							<Accordion2 />
							<Accordion3 />
						</div>
					</div>
					<div className='bottom-container'>
						<button className='logoutButton' onClick={this.viewModal}>
							Logout
						</button>

						{this.state.isModalOpen ? (
							<Modal
								headText='Logout Confirmation'
								modalText='Are you sure you want to logout?'
								confirmText='Logout'
								closeText='Cancel'
								close={this.onCloseModal}
								confirm={this.handleLogin}
								path='/login'
							/>
						) : (
							""
						)}

						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;
