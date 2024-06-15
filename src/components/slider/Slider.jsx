import './slider.scss'

function Slider({ images }) {
	return (
		<div className="slider">
			<div className="fullSlider">
				<div className="arrow">
					<img src="./src/assets/arrow.png" alt="" />
				</div>
				<div className="imgContainer">
					<img src={images[0]} alt="" />
				</div>
				<div className="arrow">
					<img src="./src/assets/arrow.png" alt="" />
				</div>
			</div>

			<div className="bigImage">
				<img src={images[0]} alt="" />
			</div>
			<div className="smallImages">
				{images.slice(1).map((image, index) => (
					<img src={image} alt="" key={index}></img>
				))}
			</div>
		</div>
	)
}

export default Slider
