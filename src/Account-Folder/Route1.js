import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Route1 extends Component {
	render() {
		return (
			<>
				<Link to='/jobseeker'>Back</Link>
				<h1>Route One</h1>
			</>
		);
	}
}

export default Route1;
