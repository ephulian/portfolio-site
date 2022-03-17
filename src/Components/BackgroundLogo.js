import React from 'react';
import '../Styles/BackgroundLogo.css';
import logo from '../Assets/bg-logo.svg';

export default function BackgroundLogo() {
	return (
		<div className='background-logos'>
			<img className='logo-1' src={logo} alt='logo' />
			<img className='logo-2' src={logo} alt='logo' />
			{/* <img className='logo-1' src={logo} alt='logo' /> */}
			{/* <img className='logo-1' src={logo} alt='logo' /> */}
		</div>
	);
}
