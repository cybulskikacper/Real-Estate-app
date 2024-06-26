import './card.scss'
import { Link } from 'react-router-dom'

function Card({ item }) {
	return (
		<div className="card">
			<Link to={`/${item.id}`} className="imageContainer">
				<img src={item.img} alt="" />
			</Link>
			<div className="textContainer">
				<h2 className="title">
					<Link to={`/${item.id}`}>{item.title}</Link>
				</h2>
				<p className="adress">
					<img src="./src/assets/pin.png" alt="dupa" />
					<span>{item.address}</span>
				</p>

				<p className="price">$ {item.price}</p>

				<div className="bottom">
					<div className="features">
						<div className="feature">
							<img src="./src/assets/bed.png" alt="" />
							<span>{item.bedroom} bedroom</span>
						</div>
						<div className="feature">
							<img src="./src/assets/bath.png" alt="" />
							<span>{item.bathroom} bathroom</span>
						</div>
					</div>
					<div className="icons">
						<div className="icon">
							<img src="./src/assets/save.png" alt="" />
						</div>
						<div className="icon">
							<img src="./src/assets/chat.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card

// zmienic w nav
