import React, { useState } from "react";
import "./Accordion.css";

const Accordion3 = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='accordion-item'>
			<div
				className='accordion-title'
				onClick={() => setIsActive(!isActive)}
			>
				<div>Account Settings</div>
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
			{isActive && (
				<div className='accordion-content'>
					<div className='accordion-content-button'>
						<button className='accordionButton'>Update Account</button>
						<button className='accordionButton'>Delete Account</button>
						<button className='accordionButton'>Reboot Account</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Accordion3;
