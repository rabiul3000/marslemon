import { Link } from 'react-router';
import TemplateCard from './TemplateCard';
import { useState } from 'react';

export default function Templates() {
	const templates = [
		{
			id: 1,
			name: 'Magazinew - Magazine Template',
			image: '/images/megazine1.png',
			type: 'portfolio',
		},
		{
			id: 2,
			name: 'Magazinew',
			image: '/images/megazine1.png',
			type: 'magazine',
		},
		{
			id: 3,
			name: 'Magazinew',
			image: '/images/megazine1.png',
			type: 'magazine',
		},
		{
			id: 4,
			name: 'Magazinew',
			image: '/public/images/megazine1.png',
			type: 'blog',
		},
		{
			id: 5,
			name: 'Magazinew',
			image: '/public/images/megazine1.png',
			type: 'magazine',
		},
		{
			id: 6,
			name: 'Magazinew',
			image: '/public/images/megazine1.png',
			type: 'blog',
		},
		{
			id: 7,
			name: 'Magazinew',
			image: '/public/images/megazine1.png',
			type: 'portfolio',
		},
	];

	const [selected, setSelected] = useState('portfolio');

	return (
		<div className='templates flex flex-col justify-center items-center'>
			<div className='tabs tabs-border flex pt-8 gap-8'>
				<input
					type='radio'
					name='tabs'
					className='tab'
					aria-label='Portfolios'
					onClick={() => setSelected('portfolio')}
					defaultChecked
				/>

				<input
					type='radio'
					name='tabs'
					className='tab'
					aria-label='Megazines'
					onClick={() => setSelected('magazine')}
				/>

				<input
					type='radio'
					name='tabs'
					className='tab'
					aria-label='Blogs'
					onClick={() => setSelected('blog')}
				/>
			</div>

			<div className='grid grid-cols-3 gap-6 p-12'>
				{templates
					.filter((template) => template.type === selected)
					.map((template) => {
						return <TemplateCard key={template.id} template={template} />;
					})}
			</div>
		</div>
	);
}
