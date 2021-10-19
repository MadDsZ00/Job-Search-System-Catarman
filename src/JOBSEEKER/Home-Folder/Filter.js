import React, { Component } from "react";
import "./Filter.css";

export class Filter extends Component {
	render() {
		return (
			<div className='filter-container'>
				<div className='filter f1'>
					<h4>Filter Posts:</h4>
					<select
						name='Filter Posts'
						defaultValue='Job Suggestions'
						className='filter-select'>
						<option disabled='disabled' hidden='hidden' value=''>
							Filter Posts
						</option>
						<option value='Latest Jobs Posts'>Latest Jobs Posts</option>
						<option value='Old Posts First'>Old Posts First</option>
						<option value='Job Suggestions'>Job Suggestions</option>
					</select>
				</div>

				<div className='filter f2'>
					<h4>Location:</h4>
					<select
						name='Location'
						defaultValue='All over Catarman'
						className='filter-select'>
						<option disabled='disabled' hidden='hidden' value=''>
							Locations
						</option>
						<option value='Brgy.Cawayan'>Brgy.Cawayan</option>
						<option value='UEP'>UEP</option>
						<option value='Brgy. Dalakit'>Brgy. Dalakit</option>
						<option value='All over Catarman'>All over Catarman</option>
					</select>
				</div>
			</div>
		);
	}
}

export default Filter;
