import React, { Component } from "react";
import "./SearchEngine.css";
import LeftArrow from "./Images/LeftArrow.png";
import { Link } from "react-router-dom";
import Post from "./JOBSEEKER/Home-Folder/Post";
import LoadingSearch2 from "./Images/LoadingSearch2.gif";

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
		console.log("--------------");
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

		if (prevSearch === null) {
			await this.setState({
				text: "",
			});
		} else {
			await this.setState({
				text: prevSearch,
			});
		}
		if (prevScroll === null) {
			await this.setState({
				scrollPosition: 0,
			});
		} else {
			await this.setState({
				scrollPosition: prevScroll,
			});
		}

		if (`${this.props.activePage}` !== "search") {
			// if (this.state.prevPage === "search" || this.state.prevPage === null) {
			// 	localStorage.setItem("previousPage", this.state.prevPage);
			// 	console.log("Run If", this.state.prevPage);
			// } else {
			// 	console.log("Run Else", this.state.prevPage);
			// }
			localStorage.setItem("previousPage", this.props.activePage);
		}

		await this.handleChangePage("search");

		this.handleScroll();
		window.addEventListener("scroll", this.listenToScroll);
		window.scrollTo(0, prevScroll);
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
		this.setState({
			scrollPosition: window.pageYOffset,
		});

		localStorage.setItem("searchScroll", window.pageYOffset);
	};

	render() {
		const previousPage = localStorage.getItem("previousPage");
		const { infos } = this.props;
		if (this.state.scrollPosition !== 0) {
			localStorage.setItem("searchScroll", this.state.scrollPosition);
			window.scrollTo(0, this.state.scrollPosition);
		}

		return (
			<div className='search-container'>
				<div className='search-panel'>
					<Link
						to={`/${previousPage}`}
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
								console.log("count");
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
						<div className='search-text'>
							<div className='search-gif'>
								<img src={LoadingSearch2} alt='Loading gif' />
							</div>
							Nothing to display, start typing...
						</div>
					</div>
				) : (
					""
				)}
			</div>
		);
	}
}

export default SearchEngine;
