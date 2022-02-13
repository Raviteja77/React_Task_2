import React from 'react';

const Button = ({ buttonText, buttonType, className, clickHandler }) => (
	// Returning a button with basic functionality
	<button onClick={clickHandler} className={className} type={buttonType}>
		{buttonText}
	</button>
);

export default Button;
