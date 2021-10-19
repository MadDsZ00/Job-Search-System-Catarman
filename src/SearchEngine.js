import React, { Component } from "react";
import "./SearchEngine.css";
import LeftArrow from "./Images/LeftArrow.png";
import { Link } from "react-router-dom";
import Post from "./JOBSEEKER/Home-Folder/Post";

export class SearchEngine extends Component {
	constructor() {
		super();
		this.state = {
			text: "",
			scrollPosition: 0,
		};
	}

	setText = async (e) => {
		await this.setState({
			text: e,
		});

		localStorage.setItem("search", this.state.text);
	};

	handleScroll = () => {
		this.setState({
			scrollPosition: window.pageYOffset,
		});
	};

	handleChangePage = async (page) => {
		await this.props.handleChangePage(page);
	};

	componentDidMount = async () => {
		const prevScroll = localStorage.getItem("scroll");

		window.addEventListener("scroll", this.listenToScroll);
		window.scrollTo(0, this.state.scrollPosition);
		this.handleScroll();
		await this.handleChangePage("search");

		const prevSearch = localStorage.getItem("search");

		if (prevSearch === null) {
			return this.setState({
				text: "",
			});
		}
		if (!prevScroll) {
			return this.setState({
				scrollPosition: 0,
			});
		}

		this.setState({
			text: prevSearch,
			scrollPosition: prevScroll,
		});

		// console.log("componentDidMount", this.state.scrollPosition);
	};

	componentWillUnmount = () => {
		window.removeEventListener("scroll", this.listenToScroll);
		this.handleScroll();
		window.scrollTo(0, this.state.scrollPosition);

		this.setState({
			text: this.state.text,
			scrollPosition: this.state.scrollPosition,
		});

		// console.log("componentWillUnmount", this.state.scrollPosition);
	};

	listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const scrolled = winScroll / height;
		this.setState({
			scrollPosition: scrolled,
		});

		localStorage.setItem("scroll", this.state.scrollPosition);
	};

	render() {
		const { infos } = this.props;

		return (
			<div className='search-container'>
				<div className='search-panel'>
					<Link
						to='/home'
						onClick={() => {
							localStorage.clear();
						}}>
						<img
							className='search-panel-icon'
							src={LeftArrow}
							alt='back'
						/>
					</Link>
					<input
						autoFocus
						className='search-panel-input'
						type='text'
						placeholder='Search here (eg. Job Title, Job Category, Address)'
						onChange={(e) => {
							this.setText(e.target.value);
						}}
						value={this.state.text}
					/>
				</div>

				{this.state.text !== "" && (
					<div className='search-engine'>
						<p
							className='results'
							style={{
								paddingTop: "20px",
							}}>{`Finding results for "${this.state.text}"`}</p>
						{infos.map((info) => {
							if (
								`${info.jobTitle}`
									.toLowerCase()
									.includes(`${this.state.text}`.toLowerCase()) ||
								`${info.category}`
									.toLowerCase()
									.includes(`${this.state.text}`.toLowerCase()) ||
								`${info.jobType}`
									.toLowerCase()
									.includes(`${this.state.text}`.toLowerCase()) ||
								`${info.companyAddress}`
									.toLowerCase()
									.includes(`${this.state.text}`.toLowerCase()) ||
								`${info.companyName}`
									.toLowerCase()
									.includes(`${this.state.text}`.toLowerCase()) ||
								`${info.prefSex}`
									.toLowerCase()
									.includes(`${this.state.text}`.toLowerCase())
							) {
								return (
									<div className='feed-container' key={info.id}>
										<Post
											info={info}
											onDelete={this.deletePost}
											toggleCompanyProfile={
												this.toggleCompanyProfile
											}
											activePage={this.props.activePage}
											setCompanyID={this.props.setCompanyID}
											isDeleted={this.props.isDeleted}
											showDelete={false}
										/>
									</div>
								);
							}
						})}
					</div>
				)}

				{this.state.text === "" ? (
					<div className='search-content'>
						<p className='search-text'>
							Nothing to display, start typing...
						</p>
					</div>
				) : (
					""
				)}
			</div>
		);
	}
}

export default SearchEngine;
