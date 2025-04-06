import React from 'react';

const Navbar = () => {
	let tabs = [
		'Home',
		'Culture',
		'Business',
		'Travel',
		'Tech',
		'Fashion',
		'Readers',
		'Politics',
		'Science',
	];

	return (
		<div className='bg-white'>
			<div className='border-b border-orange-600 px-4 pt-4 pb-1 flex justify-between'>
				<div className='left flex justify-start items-center'>
					<button className='btn btn-ghost'>
						<i className='fa-solid fa-bars text-orange-600'></i>
						<small className='px-2'>Menu</small>
					</button>
					<h1 className='text-3xl font-extrabold px-2  border-l border-slate-300 uppercase text-orange-600'>
						Megazinew
					</h1>
				</div>

				<div className='right flex gap-3 justify-center items-center'>
					<i className='fa-brands fa-facebook text-2xl hover:text-orange-600 transition-colors duration-500'></i>
					<i className='fa-brands fa-youtube text-2xl hover:text-orange-600 transition-colors duration-500'></i>
					<i className='fa-brands fa-square-x-twitter text-2xl hover:text-orange-600 transition-colors duration-500'></i>
					<label className='toggle text-base-content toggle-sm'>
						<input type='checkbox' />
						<i className='fa-solid fa-sun text-xs  rounded-full'></i>
						<i className='fa-solid fa-moon text-xs rounded-full'></i>
					</label>
				</div>
			</div>

			<div className='dropdown flex'>
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={`px-6 py-2 font-semibold flex gap-1 items-center  ${
							index === 0 && 'bg-orange-600  text-white'
						}`}
					>
						{index === 0 && <i className='fa-solid fa-house mb-1'></i>}
						{tab}
					</button>
				))}
			</div>
		</div>
	);
};
export default Navbar;
