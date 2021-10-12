import React, { Component } from "react";
import WorkPost from "../Home-Folder/WorkPost";
import WorkPostHeader from "../Home-Folder/WorkPostHeader";

export class Employer extends Component {
	render() {
		return (
			<>
				<WorkPostHeader
					name='Ralf Renz'
					onAdd={this.props.onAdd}
					showAdd={this.props.showAdd}
				/>

				{this.props.showAdd === false && (
					<WorkPost
						onAddPost={this.props.onAddPost}
						toggle={this.props.toggle}
						infos={this.props.infos}
					/>
				)}
			</>
		);
	}
}

export default Employer;
