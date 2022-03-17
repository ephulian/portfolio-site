import React from 'react';
import '../../Styles/SectionStyles/AboutMe.css';
import photo from '../../Assets/cropped.png';
import rocket from '../../Assets/Icons/Rocket.svg';
import trophy from '../../Assets/Icons/Trophy.svg';
import lightning from '../../Assets/Icons/Lightning.svg';

export default function AboutMe() {
	return (
		<section className='about-me'>
			<div className='section-title'>
				<h4 className='highlight'>Who am I?</h4>
				<h3 className='fw-bold'>
					Enthusiatic product design graduate with experience in PWA and web development
				</h3>
			</div>
			<article className='photo'>
				<div className='photo-container'>
					<img src={photo} alt='' />
				</div>
				<div className='circle black'></div>
				<div className='circle red'></div>
			</article>
			<article className='info'>
				<div className='single-info-section'>
					<img src={rocket} alt='' className='icon' />
					<h3 className='fw-bold'>Skills</h3>
					<ul className='fw-light'>
						<li>HTML5, CSS3, JavaScript, Python</li>
						<li>React, Redux, Node.js, Moment, Lodash</li>
						<li>Git, Firebase, MongoDB, REST APIs, Auth0</li>
						<li>Photoshop, Illustrator, Figma</li>
						<li>Webflow, CMS</li>
					</ul>
				</div>
				<div className='single-info-section'>
					<img src={trophy} alt='' className='icon' />
					<h3 className='fw-bold'>Goals</h3>
					<p className='fw-light'>
						My objective is to stay curious and to keep developing my skills. To continue learning
						new technologies, to meet likeminded and interesting people and create cool new things
						with them.{' '}
					</p>
				</div>
				<div className='single-info-section'>
					<img src={lightning} alt='' className='icon' />
					<h3 className='fw-bold'>Hobbies</h3>
					<p className='fw-light'>
						I am a very motivated and energetic person with a love for extreme living and the
						outdoors. I’m a snowboarder in the winter and a kitesurfer in the summer. I also have a
						soft spot for motorcycles and own an Yamaha XJ6, and have a self-converted campervan for
						those sunny weekends.
					</p>
				</div>
			</article>
		</section>
	);
}
