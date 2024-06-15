import { useState } from 'react'
import './slider.scss'

function Slider({ images }) {
	const [imageIndex, setImageIndex] = useState(null)

	const changeSlide = direction => {
		setImageIndex(
			direction === 'left' ? (imageIndex === 0 ? images.length - 1 : imageIndex - 1)
			: (imageIndex === images.length - 1 ? 0 : imageIndex + 1)
	)
	}

	return (
		<div className="slider">
			{imageIndex !== null && (
				<div className="fullSlider">
					<div className="arrow">
						<img src="./src/assets/arrow.png" alt="" onClick={() => changeSlide('left')} />
					</div>
					<div className="imgContainer">
						<img src={images[imageIndex]} alt="" />
					</div>
					<div className="arrow">
						<img src="./src/assets/arrow.png" className="right" alt="" onClick={() => changeSlide('right')} />
					</div>

					<div className="close" onClick={() => setImageIndex(null)}>
						X
					</div>
				</div>
			)}

			<div className="bigImage">
				<img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
			</div>
			<div className="smallImages">
				{images.slice(1).map((image, index) => (
					<img src={image} alt="" key={index} onClick={() => setImageIndex(index + 1)}></img>
				))}
			</div>
		</div>
	)
}

export default Slider
