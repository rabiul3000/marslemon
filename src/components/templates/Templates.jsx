import TemplateCard from './TemplateCard';
import { useState } from 'react';
import templates from '../mock/data.json';

export default function Templates() {
	const [selected, setSelected] = useState('portfolio');

	return (
		<div className='templates flex flex-col justify-center items-center'>
			<div className='tabs tabs-border flex pt-8 gap-8'>
				<input
					type='radio'
					name='tabs'
					className='tab'
					aria-label='Portfolio'
					onClick={() => setSelected('portfolio')}
					defaultChecked
				/>

				<input
					type='radio'
					name='tabs'
					className='tab'
					aria-label='News Portal'
					onClick={() => setSelected('news')}
				/>

				<input
					type='radio'
					name='tabs'
					className='tab'
					aria-label='Blog'
					onClick={() => setSelected('blog')}
				/>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-6 p-12'>
				{templates
					.filter((template) => template.type === selected)
					.map((template) => {
						return <TemplateCard key={template.id} template={template} />;
					})}
			</div>
		</div>
	);
}
