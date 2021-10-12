import React, { Component } from "react";
import Post from "./Post";
import "./Feed.css";

export class Feed extends Component {
	constructor() {
		super();
		this.state = {
			togglePanel: [true],
		};
	}

	deletePost = (id) => {
		this.props.onDelete(id);
	};

	toggleCompanyProfile = () => {
		this.setState({
			togglePanel: !this.state.togglePanel,
		});
	};

	componentDidMount() {
		window.addEventListener("scroll", this.listenToScroll);
		window.scrollTo(0, this.props.scrollPosition);
		this.props.handleScroll();
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.listenToScroll);
		this.props.handleScroll();
		window.scrollTo(0, this.props.scrollPosition);
	}

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
	};

	render() {
		return (
			<>
				<div
					className='feed-container'
					style={!this.state.togglePanel ? { display: "none" } : {}}>
					{this.props.infos.map((info) => {
						return (
							<Post
								key={info.id}
								info={info}
								onDelete={this.deletePost}
								toggleCompanyProfile={this.toggleCompanyProfile}
								togglePanel={this.state.togglePanel}
								setCompanyID={this.props.setCompanyID}
								isDeleted={this.props.isDeleted}
							/>
						);
					})}
				</div>
			</>
		);
	}
}

export default Feed;
