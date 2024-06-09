import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'

function HomePage() {
	return (
		<div className="homePage">
			<div className="textContainer">
				<div className="wrapper">
					<h1 className="title">Find Real Estate & Get Your Dream Place</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore quisquam iusto omnis dignissimos dolorum
						ipsum itaque soluta fuga quo, architecto unde placeat tenetur culpa ea suscipit voluptatem rerum nesciunt.
					</p>
					<SearchBar />

					<div className="boxes">
						<div className="box">
							<h1>16+</h1 >
							<h2>Years of Experience</h2>
						</div>
						<div className="box">
							<h1>200 </h1>
							<h2>Award Gained</h2>
						</div>
						<div className="box">
							<h1>1200+</h1>
							<h2>Property Ready</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="imgContainer">
				<img src="./src/assets/bg.png" alt="" />
			</div>
		</div>
	)
}

export default HomePage
