import './profilePage.scss'
import List from '../../components/list/list'
import Chat from '../../components/chat/chat'

function ProfilePage() {
	return (
		<div className="profilePage">
			<div className="details">
				<div className="wrapper">
					<div className="title">
						<h1>User Information</h1>
						<button>Update Profile</button>
					</div>
					<div className="info">
						<span>
							Avatar:
							<img
								src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt=""
							/>
						</span>
						<span>
							Username: <b>John Doe</b>
						</span>
						<span>E-mail: john@gmail.com</span>
					</div>
					<div className="title">
						<h1>My list</h1>
						<button>Create New Post</button>
					</div>
					<List />
					<div className="title">
						<h1>Saved list</h1>
						<List />
					</div>
				</div>
			</div>
			<div className="chatContainer">
				<div className="wrapper">
					<Chat />
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
