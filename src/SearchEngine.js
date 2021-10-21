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

	handleScroll = async () => {
		await this.setState({
			scrollPosition: window.pageYOffset,
		});
	};

	handleChangePage = async (page) => {
		await this.props.handleChangePage(page);
	};

	componentDidMount = async () => {
		const prevScroll = localStorage.getItem("searchScroll");
		const prevSearch = localStorage.getItem("search");

		await this.handleChangePage("search");
		await this.setState({
			text: prevSearch,
			scrollPosition: prevScroll,
		});

		this.handleScroll();

		window.addEventListener("scroll", this.listenToScroll);
		window.scrollTo(0, prevScroll);

		if (prevSearch === null) {
			return this.setState({
				text: "",
			});
		}
	};

	componentWillUnmount = async () => {
		window.removeEventListener("scroll", this.listenToScroll);
		this.handleScroll();
		window.scrollTo(0, this.state.scrollPosition);

		await this.setState({
			text: this.state.text,
			scrollPosition: this.state.scrollPosition,
		});
	};

	listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const scrolled = winScroll / height;
		this.setState({
			scrollPosition: window.pageYOffset,
		});

		localStorage.setItem("searchScroll", window.pageYOffset);
	};

	render() {
		const { infos } = this.props;
		if (this.state.scrollPosition != 0) {
			localStorage.setItem("searchScroll", this.state.scrollPosition);
			window.scrollTo(0, this.state.scrollPosition);
		}
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
