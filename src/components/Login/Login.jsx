import React, { useEffect, useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { constantVariables } from '../../constants';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useLocalStorageToken from '../../customHooks/useLocalStorageToken';

function Login() {
	const [loginFormDetails, setLoginFormDetails] = useState({
		email: '',
		password: '',
	});

	const [token, setToken] = useState(useLocalStorageToken());
	const navigate = useNavigate();

	const navigateToCourses = () => navigate('/courses', { replace: true });

	useEffect(() => {
		// Re-directs to courses page even clicking back button
		// if token is available localStorage
		if (token) navigateToCourses();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// Updates tokenId key in localStorage after successful login
		localStorage.setItem('tokenId', token);
		return () => {
			setToken(token);
		};
	}, [token]);

	const handleLoginDetails = (event) => {
		// Updates loginFormDetails on any change in input fields
		// respective id will be picked to update data correctly
		const newLoginDetails = { ...loginFormDetails };
		newLoginDetails[event.target.id] = event.target.value;
		setLoginFormDetails(newLoginDetails);
	};

	const postLoginDetails = (event) => {
		// Get token from backend on successful post request
		// And navigate to courses page otherwise alert the user
		event.preventDefault();
		axios
			.post('http://localhost:3000/login', {
				email: loginFormDetails.email,
				password: loginFormDetails.password,
			})
			.then((response) => {
				setToken(response.data.result);
				navigateToCourses();
			})
			.catch((error) => {
				alert('Please check the details again');
			});
	};

	return (
		<form className='login' onSubmit={postLoginDetails}>
			<h2 className='login_title text-center'>{constantVariables.LOGIN}</h2>
			<Input
				id={constantVariables.LABEL_EMAIL.toLowerCase()}
				labelText={constantVariables.LABEL_EMAIL}
				placeholderText={constantVariables.EMAIL_PLACEHOLDER}
				typeText={constantVariables.EMAIL_TYPE}
				changeHandler={handleLoginDetails}
			/>
			<Input
				id={constantVariables.LABEL_PASSWORD.toLowerCase()}
				labelText={constantVariables.LABEL_PASSWORD}
				placeholderText={constantVariables.PASSWORD_PLACEHOLDER}
				typeText={constantVariables.PASSWORD_TYPE}
				changeHandler={handleLoginDetails}
			/>
			<div className='login_button text-center'>
				<Button
					buttonText={constantVariables.LOGIN}
					className='btn btn-outline-primary'
					buttonType={constantVariables.SUBMIT_TYPE}
				/>
			</div>
			<div className='login_note text-center'>
				<p>
					If you not have an account you can{' '}
					<Link to='/registration'>Register</Link>
				</p>
			</div>
		</form>
	);
}

export default Login;
