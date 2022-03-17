import React from 'react';
import '../../Styles/SectionStyles/Home.css';

export default function Home() {
	return (
		<section className='home'>
			<article>
				<h1>
					KIRIL <br />
					KOMITSKI
				</h1>
				<br />
				<br />
				<p className='fw-light'>
					a <span className='highlight fw-'>Front-End</span> developer &{' '}
					<span className='highlight fw-'>UX/UI Designer</span> based in London, UK.
					<br />
					<br />I am passionate about well-organised, readable code and pixel-perfect design. I
					specialise in <span className='highlight fw-'> React</span> and{' '}
					<span className='highlight fw-'>Node.js</span>.
				</p>
				<br />
				<br />
				<div className='button'>
					<h4 className='fw-bold'>Get in Touch</h4>
				</div>
			</article>
		</section>
	);
}
