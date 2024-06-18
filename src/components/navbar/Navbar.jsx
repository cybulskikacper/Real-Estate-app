import { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

function NavBar() {
	const [open, setOpen] = useState(false)

	const user = true

	return (
		<nav>
			<div className="left">
				<a href="/" className="logo">
					<img src="./src/assets/logo.png" alt="" />
					<span>CYBEstate</span>
				</a>
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
				<a href="/">Agents</a>
			</div>
			<div className="right">
				{user ? (
					<div className="user">
						<img
							src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
						/>
						<span>John Doe</span>
						<Link to="/profile" className="profile">
							Profile
						</Link>
					</div>
				) : (
					<>
						<a href="/">Sign in</a>
						<a href="/" className="register">
							Sign up
						</a>
					</>
				)}
				<div className="menuIcon">
					<img src="./src/assets/menu.png" alt="" onClick={() => setOpen(!open)} />
				</div>
				<div className={open ? 'menu active' : 'menu'}>
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Contact</a>
					<a href="/">Agents</a>
					<a href="/">Sign in</a>
					<a href="/">Sign up</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
