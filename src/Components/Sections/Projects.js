import React from 'react';
import Project from './Project';

export default function Projects() {
	const projects = [
		{
			name: 'Paper Planes',
			title: 'Invoicing App',
			description:
				'Reactive web app for creating and managing invoicing. Built entirely with React for the front-end and Firebase Firestore as a database. Includes authentication, all CRUD opperations as well as user profile editing and light and dark modes.',
			tech: [
				'figma',
				'photoshop',
				'html',
				'css',
				'javascript',
				'git',
				'react',
				'redux',
				'firebase',
			],
		},
	];

	return (
		<section>
			<div className='section-title'>
				<h4 className='highlight'>What have I done?</h4>
				<h3 className='fw-bold'>
					I have designed and built multiple database connected web apps with authentication, form
					data, state management and CRUD opperations
				</h3>
			</div>
			<Project />
		</section>
	);
}
