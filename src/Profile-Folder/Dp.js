import React, { Component } from "react";
import Gap from "../Gap";
import "./Dp.css";
import User from "../Images/User.png";
import CameraIcon from "../Images/CameraIcon.png";

export class Dp extends Component {
	constructor() {
		super();
		this.state = {
			file: null,
			profileImg: User,
			toggleChooser: false,
			showImage: false,
		};
	}

	handleFileChange = (event) => {
		this.setState({
			file: URL.createObjectURL(event.target.files[0]),
		});
	};

	handleSave = () => {
		this.setState({
			profileImg: this.state.file,
			toggleChooser: false,
			file: null,
		});
	};

	toggleImagePreview = () => {
		this.setState({
			showImage: !this.state.showImage,
		});
	};

	render() {
		return (
			<div className='profile-container'>
				<Gap />

				<div className='dp'>
					<div className='profile-picture'>
						<img
							src={this.state.profileImg}
							alt={User}
							onClick={this.toggleImagePreview}
							title='Preview Image'
						/>
					</div>

					{this.state.showImage ? (
						<div className='image-preview-container'>
							<div className='overlay-style' />
							<div className='image-preview'>
								<h4 className='image-preview-title'>Image Preview</h4>
								<div
									className='close-preview'
									onClick={this.toggleImagePreview}>
									x
								</div>
								<div className='image-wrapper'>
									<img
										className='image-preview-img'
										src={this.state.profileImg}
										alt='profile'
									/>
								</div>
							</div>
						</div>
					) : (
						""
					)}

					<div className='camera'>
						<img
							src={CameraIcon}
							alt='Edit Profile'
							title='Edit Profile Picture'
							onClick={() => {
								this.setState({
									toggleChooser: !this.state.toggleChooser,
								});
							}}
						/>
					</div>
				</div>
				{this.state.toggleChooser ? (
					<div className='file-picker'>
						<h3>
							{this.state.file !== null
								? "Update Profile Picture Preview"
								: "Update Profile Picture"}
						</h3>
						<input
							type='file'
							name='updatePic'
							onChange={this.handleFileChange}
						/>

						<div className='img-holder'>
							<img
								src={this.state.file}
								alt={
									this.state.file !== null
										? "New Profile Picture"
										: "No Loaded Picture"
								}
							/>
						</div>

						{this.state.file !== null ? (
							<div className='update'>
								<button onClick={this.handleSave}>Save</button>
							</div>
						) : (
							""
						)}

						<p>Click the camera icon to toggle file picker on and off</p>
					</div>
				) : (
					""
				)}
				<h2>Ralf Renz Estellana Bantilo</h2>

				<div className='active-status-container'>
					<h3>Available to hire</h3>

					<label className='switch'>
						<p className='switch-on'>on</p>
						<p className='switch-off'>off</p>
						<input type='checkbox' className='checkbox' />
						<span className='slider'></span>
					</label>
				</div>
			</div>
		);
	}
}

export default Dp;
