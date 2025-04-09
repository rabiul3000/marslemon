import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 2000);

		return () => clearInterval(interval);
	});

	return (
		<div
			style={{
				backgroundImage: `url(${images[currentIndex].src})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'bottom center',
				width: '100%',
				height: '100%',
			}}
		></div>
	);
};

export default Carousel;
