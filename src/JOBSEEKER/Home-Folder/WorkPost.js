import React, { Component } from "react";
import JobVacancyForm from "./JobVacancyForm";

export class WorkPost extends Component {
	toggleView = () => {
		this.props.toggle();
	};

	viewPost = (post) => {
		this.props.onAddPost(post);
	};

	render() {
		return (
			<div>
				<JobVacancyForm
					toggle={this.toggleView.bind(this)}
					infos={this.props.infos}
					onAddPost={this.viewPost}
				/>
			</div>
		);
	}
}

export default WorkPost;
