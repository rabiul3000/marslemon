import React from 'react';
import { Link } from 'react-router';

const TemplateCard = ({ template }) => {
	const { name, image } = template;
	let path = `../preview/${name.split(' ')[0].toLowerCase()}`;

	return (
		<div className='card bg-base-100 w-96 shadow-md'>
			<figure>
				<img src={image} alt='Shoes' />
			</figure>
			<div className='card-body bg-slate-100'>
				<h2 className='card-title text-sm'>
					{name}
					<div className='badge badge-xs badge-primary'>NEW</div>
				</h2>
				<p>
					{name.split(' ')[0]} is one of the best seller responsive newspaper
					and magazine Blogger theme.
				</p>

				<div className='card-actions justify-end'>
					<Link className='btn btn-xs' to={path}>
						Preview
					</Link>
					<button className='btn btn-xs btn-neutral'>Add To cart</button>
				</div>
			</div>
		</div>
	);
};

export default TemplateCard;
