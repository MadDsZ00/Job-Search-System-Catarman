import React, { Component } from "react";
import { withRouter } from "react-router";
import Loading1 from "../Images/Loading1.gif";
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
		return (
			<div className='welcome-container'>
				<div className='welcome-container-overlay'></div>
				<div className='welcome-container-content'>
					<img src={Loading1} alt='Loading1 gif' />
					<h3>How's it going Ralf Renz Bantilo</h3>
					<p>Initializing Components...</p>
				</div>

				{<CountDown method={this.props.method} delay={this.props.delay} />}
			</div>
		);
	}
}

export default withRouter(WelcomeWindow);
