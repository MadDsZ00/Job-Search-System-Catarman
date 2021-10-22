import React, { Component } from "react";
import { withRouter } from "react-router";
import Loading2Blue from "../Images/Loading2Blue.gif";
import CountDown from "../JOBSEEKER/Home-Folder/CountDown";
import "./WelcomeWindow.css";

export class WelcomeWindow extends Component {
	push = (path) => {
		this.props.history.push(path);
	};

	componentWillUnmount() {
		this.push("/home");
	}
	render() {
		const { firstName, lastName } = this.props.currentUser;
		return (
			<div className='welcome-container'>
				<div className='welcome-container-overlay'></div>
				<div className='welcome-container-content'>
					<img src={this.props.roleGif} alt='Loading1 gif' />
					<h3>How's it going {`${firstName} ${lastName}`}</h3>
					<p>Initializing Components...</p>
				</div>

				{<CountDown method={this.props.method} delay={this.props.delay} />}
			</div>
		);
	}
}

export default withRouter(WelcomeWindow);
