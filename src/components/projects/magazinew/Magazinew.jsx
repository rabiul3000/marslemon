import React from 'react';
import Navbar from './Navbar';

const Magazinew = () => {
	const images = ['/images/c1.jpg', '/images/c2.jpg', '/images/c3.jpg'];

	let increase = () => {
		let count = 0;
		setInterval(() => {
			if (count === images.length) {
				count = 0;
			}
			count++;
			console.log(count);
		}, 1000);
		return count;
	};

	let ans = increase();
	console.log(ans);

	return (
		<div className='megazinew mx-44 my-auto shadow-lg'>
			<nav>
				<Navbar />
			</nav>
			<main className='my-6 border flex'>
				<div className='leftContainer border border-red-500 flex-3/4'>
					<div className='imageContainer border w-full h-[400px]'>
						<img
							className='w-full h-full object-cover'
							src={images[0]}
							alt='headlines'
						/>
					</div>
				</div>

				<div className='rightContainer flex-1/4 p-2'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
					animi quis molestiae minima dignissimos illo debitis neque
					necessitatibus. Placeat, accusantium. Blanditiis repellat minus
					corrupti minima, perferendis aliquam totam quo quisquam perspiciatis
					ad qui numquam iste modi, facere laborum asperiores veritatis dolorem
					explicabo sed animi voluptate a repudiandae, beatae placeat?
					Exercitationem accusantium facere harum quisquam dicta ducimus ex
					tenetur unde autem reiciendis provident cupiditate vero consequuntur
					veritatis, expedita delectus assumenda nemo culpa voluptatum ullam ut
					illum. Libero exercitationem porro est molestiae, eaque minima
					distinctio illum. Vel ex modi laborum quisquam accusantium, rerum, id
					iste voluptatibus perspiciatis molestias nemo veritatis enim illo
					praesentium nostrum mollitia. Optio earum neque quibusdam repellendus
					dolorum perferendis, atque officiis, id veniam sapiente fuga obcaecati
					consequuntur nisi sint alias debitis? Aliquid neque illum praesentium,
					officia voluptatem quis, tempora recusandae facilis alias quod,
					provident voluptate mollitia quidem nobis sapiente velit assumenda
					fuga error tenetur! Odit impedit quasi distinctio, tempora delectus
					praesentium reprehenderit laudantium amet ab modi cum fuga explicabo
					dolorum voluptas aliquam ea debitis, minus illo excepturi, non ipsum.
					Labore obcaecati, unde inventore molestiae hic laborum numquam! Odio
					ab veritatis asperiores soluta illum, facilis sint earum sapiente
					omnis nulla at incidunt minus quae a rerum architecto sed voluptatibus
					debitis.
				</div>
			</main>
		</div>
	);
};

export default Magazinew;
