import React from 'react';
import PropTypes from 'prop-types';
import LaunchItem from './LaunchItem';


const LaunchesList = ({ launches }) => {

	let body = launches.map((launch, index) => {
		return (
			<LaunchItem key={index} data={launch} index={index} />
		);
	});

	return (
		<>
			{body}
		</>
	);
};

export default LaunchesList;

LaunchesList.propTypes = {
	launches: PropTypes.array
};
