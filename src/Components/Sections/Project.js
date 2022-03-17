import React from 'react';
import '../../Styles/SectionStyles/Project.css';

export default function Project() {
	return (
		<div>
			<div className='project-image'>
				<img
					src='https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/qjvxdujiq2594nunbhar.jpg'
					alt=''
				/>
			</div>
			<div className='project-info'>
				<h3 className='fw-bold'>Paper Planes</h3>
				<h4 className='highlight fw-regular'>Invoicing App</h4>
				<p className='fw-light'>
					Reactive web app for creating and managing invoicing. Built entirely with React for the
					front-end and Firebase Firestore as a database. Includes authentication, all CRUD
					opperations as well as user profile editing and light and dark modes.
				</p>
			</div>
		</div>
	);
}
