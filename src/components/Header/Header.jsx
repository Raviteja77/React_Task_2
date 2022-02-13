import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { constantVariables } from '../../constants';
import './Header.css';
import useCurrentLocation from '../../customHooks/useCurrentLocation';
import useNavigateToPage from '../../customHooks/useNavigateToPage';

function Header() {
	const currentPath = useCurrentLocation();

	const navigateToLogin = useNavigateToPage('/login');

	const userName = window.localStorage.getItem('userName');

	const clickHandler = () => {
		window.localStorage.clear();
		navigateToLogin();
	};

	return (
		<div className='header'>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<div className='container-fluid'>
					<Logo />
					{currentPath === '/login' || currentPath === '/registration' ? (
						''
					) : (
						<div className='d-flex'>
							<strong className='username'>{userName}</strong>

							<Button
								buttonText={constantVariables.LOGOUT}
								className='btn btn-outline-danger'
								clickHandler={clickHandler}
							/>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
}

export default Header;
