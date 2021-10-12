import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Route3 extends Component {
	render() {
		return (
			<>
				<Link to='/jobseeker'>Back</Link>
				<h1>Route Three</h1>
			</>
		);
	}
}

export default Route3;
