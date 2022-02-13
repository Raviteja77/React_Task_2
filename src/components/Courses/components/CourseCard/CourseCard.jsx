import React from 'react';
import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { constantVariables } from '../../../../constants';
import { Link } from 'react-router-dom';
import { convertMinsToHrsMins } from '../../../../helpers/pipeDuration';
import useAuthorsIdToGetName from '../../../../customHooks/useAuthorsIdToGetName';

function CourseCard({ value }) {
	return (
		<section className='course'>
			<div className='row'>
				<div className='col-8'>
					<h3>{value.title}</h3>
					<p>{value.description}</p>
				</div>
				<div className='col-4'>
					<div className='authors'>
						<strong>Authors</strong>: {useAuthorsIdToGetName(value.authors)}
					</div>
					<div>
						<strong>Duration</strong>: {convertMinsToHrsMins(value.duration)}
					</div>
					<div>
						<strong>Created</strong>: {value.creationDate}
					</div>
					<Link to={`/courses/${value.id}`}>
						<Button
							buttonText={constantVariables.SHOW_COURSE}
							className='btn btn-outline-success'
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default CourseCard;
