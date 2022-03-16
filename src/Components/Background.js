import React from 'react';
import bg1 from '../Assets/bg1.png';
import bg2 from '../Assets/bg.png';
import '../Styles/Background.css';

export default function Background() {
	return (
		<div className='backgrounds'>
			<img className='background top' src={bg1} alt='gray gradient' />
			<div className='white-gradient'></div>
			<div className='white'></div>
			<div className='white-gradient-flipped'></div>
			<img className='background mid-top flipped' src={bg2} alt='gray gradient' />
			<img className='background mid-bottom' src={bg2} alt='gray gradient' />
		</div>
	);
}
