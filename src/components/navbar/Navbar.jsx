import './navbar.scss'

function NavBar() {
	return (
		<nav>
			<div className="left">
				<a href="/">
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
				<a href="/">Sign up</a>
			</div>
		</nav>
	)
}

export default NavBar
