import { useState } from 'react'
import './navbar.scss'

function NavBar() {
	const [open, setOpen] = useState(false)

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
				<a href="/">Sign in</a>
				<a href="/" className="register">
					Sign up
				</a>

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