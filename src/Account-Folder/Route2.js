import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Route2 extends Component {
	render() {
		return (
			<>
				<Link to='/jobseeker'>Back</Link>
				<h1>Route Two</h1>
			</>
		);
	}
}

export default Route2;
