import './profilePage.scss'

function ProfilePage() {
	return (
		<div className="profilePage">
			<div className="details">
				<div className="wrapper">
					<div className="title">
						<h1>User Information</h1>
						<button>Update Profile</button>
					</div>
				</div>
			</div>
			<div className="chatContainer">
				<div className="wrapper"></div>
			</div>
		</div>
	)
}

export default ProfilePage
