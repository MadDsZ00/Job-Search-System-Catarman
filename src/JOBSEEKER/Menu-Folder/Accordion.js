import React, { useState } from "react";
import "./Accordion.css";
import { Link } from "react-router-dom";

const Accordion = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='accordion-item'>
			<div
				className='accordion-title'
				onClick={() => setIsActive(!isActive)}
			>
				<div>Help & Support</div>
				<div
					className='toggle-container'
					style={{
						background: isActive
							? "linear-gradient(to bottom, #ff7b00, #ff004c)"
							: "linear-gradient(to bottom, #00b2ff, #006aff)",
					}}
				>
					<div
						title={isActive ? "Show Less" : "Show More"}
						className='toggleAccordion'
					>
						{isActive ? "-" : "+"}
					</div>
				</div>
			</div>
			{/* {isActive && <div className='accordion-content'>{content}</div>} */}
			{isActive && (
				<div className='accordion-content'>
					<div className='accordion-content-button'>
						<Link to='/menu/about'>
							<button>About Job Search Catarman</button>{" "}
						</Link>
						<Link to='/menu/contact'>
							<button>Contact Us</button>{" "}
						</Link>
						<Link to='/menu/help'>
							<button>Help Center</button>{" "}
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Accordion;
