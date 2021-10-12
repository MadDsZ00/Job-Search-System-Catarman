import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Route1 from "./Route1";
import Route2 from "./Route2";
import Route3 from "./Route3";

export class JobSeeker extends Component {
	render() {
		return (
			<>
				<h1 style={{ textAlign: "center" }}>Job Seeker Panel</h1>

				<div
					className='router-wrapper'
					style={{ display: "flex", justifyContent: "space-around" }}>
					<Link to='jobseeker/route1'>Route One</Link>
					<Link to='jobseeker/route2'>Route Two</Link>
					<Link to='jobseeker/route3'>Route Three</Link>
				</div>

				{/* <Router>
					<Switch>
						<Route exact path='/jobseeker/route1' component={Route1} />
						<Route exact path='/jobseeker/route2' component={Route2} />
						<Route exact path='/jobseeker/route3' component={Route3} />
					</Switch>
				</Router> */}
			</>
		);
	}
}

export default JobSeeker;
