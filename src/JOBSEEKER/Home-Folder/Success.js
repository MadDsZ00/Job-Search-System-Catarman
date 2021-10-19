import React, { Component } from "react";
import Indication from "../../Indication";
import "./Confirm.css";

export class Success extends Component {
	toggleView = () => {
		this.props.toggle();
	};

	render() {
		return (
			<Indication
				backgroundcolor='blue'
				text='Job vacancy uploaded!'
				method={this.toggleView}
				delay={3}
			/>
		);
	}
}

export default Success;
