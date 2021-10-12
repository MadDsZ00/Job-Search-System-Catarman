import React, { Component } from "react";
import "./SearchEngine.css";
import LeftArrow from "./Images/LeftArrow.png";
import Post from "./Home-Folder/Post";
import Feed from "./Home-Folder/Feed";
import Gap from "./Gap";
import { Link } from "react-router-dom";

export class SearchEngine extends Component {
	state = {
		text: "",
	};

	setText = (e) => {
		this.setState({
			text: e,
		});
	};

	render() {
		const { infos } = this.props;
		return (
			<div className='search-container'>
				<div className='search-panel'>
					<Link to='/home'>
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
					/>
				</div>

				{this.state.text !== "" && (
					<div className='search-engine'>
						<p
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
											togglePanel={this.state.togglePanel}
											setCompanyID={this.props.setCompanyID}
											isDeleted={this.props.isDeleted}
										/>
									</div>

									// <Feed
									// 	onDelete={this.props.onDelete}
									// 	infos={this.props.infos}
									// 	scrollPosition={this.props.scrollPosition}
									// 	handleScroll={this.props.handleScroll}
									// 	setCompanyID={this.props.setCompanyID}
									// />
								);
							}
						})}
					</div>
				)}
			</div>
		);
	}
}

export default SearchEngine;
