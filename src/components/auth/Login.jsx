import React from 'react';
import { useNavigate } from 'react-router';

const Login = ({ user }) => {
	const navigate = useNavigate('/Home');

	const handleSubmit = (e) => {
		e.preventDefault();
		const { value: email } = e.target['email'];
		const { value: password } = e.target['password'];

		user.email === email && user.password === password
			? navigate('/home')
			: alert('email or password wrong');
	};

	return (
		<div className='flex justify-center items-center flex-col h-100'>
			<form
				action='#'
				onSubmit={handleSubmit}
				className='flex justify-center items-center flex-col p-10 gap-4'
			>
				<input
					name='email'
					type='email'
					required
					placeholder='Enter Email'
					className='input-primary py-4 px-8'
				/>
				<input
					name='password'
					type='password'
					placeholder='Enter Password'
					required
					className='input-primary py-4 px-8'
				/>
				<button className='btn btn-outline btn-info px-12'>Login</button>
			</form>
		</div>
	);
};

export default Login;
