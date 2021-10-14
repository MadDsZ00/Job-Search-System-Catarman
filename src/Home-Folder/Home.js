import React from "react";
import Feed from "./Feed";
import Footer from "./Footer";
import { Component } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Gap from "../Gap";
import "./Home.css";
import Indication from "../Indication";
import Filter from "./Filter";
import SearchEngine from "../SearchEngine";

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleHasApplied: [props.hasApplied],
		};
	}

	handleChangePage = async (page) => {
		await this.props.handleChangePage(page);
	};

	closeHasApplied = () => {
		this.setState({
			toggleHasApplied: false,
		});

		this.props.closeHasApplied();
	};

	closeDeleteState = () => {
		this.props.closeDeleteState();
	};

	componentDidMount = async () => {
		await this.handleChangePage("home");
	};

	componentWillUnmount() {
		this.closeHasApplied();
		this.closeDeleteState();
	}

	render() {
		return (
			<div className='home-container'>
				<Header jobSeeker={this.props.jobSeeker} />
				<Navbar activePage='home' />
				{/* <SearchEngine /> */}
				<Gap />

				<Filter />

				{this.props.hasApplied === true && (
					<Indication
						backgroundcolor='green'
						text='Your job application has been sent'
						method={this.closeHasApplied}
						delay={5}
					/>
				)}

				{this.props.isDeleted === true && (
					<Indication
						backgroundcolor='orange'
						text='Post has been deleted!'
						method={this.closeDeleteState}
						delay={3}
					/>
				)}

				<div className='feed'>
					{this.props.infos.length > 0 ? (
						<Feed
							onDelete={this.props.onDelete}
							infos={this.props.infos}
							scrollPosition={this.props.scrollPosition}
							handleScroll={this.props.handleScroll}
							setCompanyID={this.props.setCompanyID}
							activePage={this.props.activePage}
						/>
					) : (
						<p
							style={{
								textAlign: "center",
								padding: "10px",
								backgroundColor: "red",
								marginTop: "20px",
								fontSize: "12px",
							}}>
							No Posts Available!
						</p>
					)}
				</div>
				<div className='footer'>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Home;
