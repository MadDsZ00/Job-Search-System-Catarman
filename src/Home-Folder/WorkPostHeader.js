import User from "../Images/User.png";
import "./WorkPostHeader.css";

const WorkPostHeader = ({ name, onAdd, showAdd }) => {
	return (
		<div className='user-post'>
			<div className='user-profile'>
				<img src={User} alt='User' title={name} />
			</div>

			<div className='post-button'>
				<button onClick={onAdd}>
					{showAdd
						? `Click to toggle job vacancy form`
						: `Click to close job vacancy form`}
				</button>
			</div>
		</div>
	);
};

export default WorkPostHeader;
