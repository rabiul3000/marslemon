import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';

const Magazinew = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const images = [
		{ id: 1, src: '/images/c1.jpg', alt: 'carousel-1' },
		{ id: 2, src: '/images/c2.jpg', alt: 'carousel-2' },
		{ id: 3, src: '/images/c3.jpg', alt: 'carousel-3' },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 3000);

		return () => clearInterval(interval);
	});

	return (
		<div className='megazinew mx-44 my-auto shadow-lg'>
			<nav>
				<Navbar />
			</nav>

			<main className='my-6 flex'>
				<div className='leftContainer flex-3/4'>
					<div className='imageContainer w-full h-[400px] relative'>
						{images.map((image) => (
							<div
								key={image.id}
								className={`
									absolute transition-opacity duration-1000
									bg-no-repeat bg-cover bg-bottom-center
									w-full h-full overflow-hidden
									${images[currentIndex] === image ? 'opacity-100' : 'opacity-0'}
								`}
								style={{
									backgroundImage: `url(${image.src})`,
								}}
							>
								<div className='absolute left-80 top-2/3'>
									<a className=' px-8 py-2 text-white font-semibold border rounded-sm cursor-pointer'>
										Read More
									</a>
								</div>
							</div>
						))}
					</div>

					<div className='mt-4'>
						<div className='flex p-2 justify-between items-center cursor-pointer'>
							<h1 className='text-2xl font-semibold text-orange-600'>
								Staff Pick
							</h1>
							<a className='text-sm text-orange-600 items-center'>
								View All<i className='fa-solid fa-arrow-right ml-2'></i>
							</a>
						</div>
						<div>
							<div>
								<img
									src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4yF6XNRQQdV_N8amV-Vf0vch3AEee4k_AKA6TqclxgSdA-xKT_GL_cDa4bJdz4veO1Lr5uXSBF_qm9o9yOGXeJFh_qvSJF6rjsjYDGZ10zLBqJpoop2FRbvHg_EMj5b-bnJnRvqC325aI/s860-rw/Kiplinger+Sunday+Business6871393885813.webp'
									alt=''
								/>
							</div>
							<div>
								<img
									src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo9dXKJ7Rb8MkeWTtuO1vpsblF5JaGzoB11T_vntXm7pZjbi5EQyTpNc-c8chhVI_mbLptaigq3VAfm78eUS_cTWZIGVDWXnSvgjbdP3UcB8u8D5cZNNDHPMXIk0wtwE67dFdf608Yz_Q/s546-rw/tech_new-keyboard_84.webp'
									alt='img-2'
								/>
							</div>
							<div>
								<img
									src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1iMJj74B0EXWbXuO6xjnJDwvnKeH6sFLyJeXqOpbOfyP1rqXILA00iORD11a8K_Dhr3p15VtefwWuJQzxJSpvPdtVnm6Xpt_aOr64fAeN-nkRQEzp-m8ZoAb0ZSuj9fUEC8jUBEcjQB9I/s546-rw/music_studio-headphone_88K.webp'
									alt='img-3'
								/>
							</div>
							<div>
								<img src="" alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className='rightContainer flex-1/4 p-2 flex flex-col gap-8'>
					<div>
						<img
							src='/images/facebook-banner-link.jpg'
							loading='lazy'
							alt='fb-banner'
						/>
					</div>
					<div>
						<img
							src='/images/random-post-link.png'
							loading='lazy'
							alt='fb-banner'
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Magazinew;
