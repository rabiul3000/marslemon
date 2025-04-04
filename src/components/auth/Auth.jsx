import React from 'react';
import Login from './Login';
import Home from '../home/Home';

const Auth = () => {
	const user = {
		email: 'rabiul@gmail.com',
		password: '12345',
	};

	return (
		<div className='auth'>
			{
				!user ? < Home/> : <Login user={user} />
			}
		</div> 
	);
};

export default Auth;
