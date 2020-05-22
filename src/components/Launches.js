import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LaunchesList from './LaunchesList';

const Launches = () => {

	const [launches] = useState([
		{
			name: 'FalconSat',
			date: '24th Mar 2006',
			rocket: 'Falcon 1'
		},
		{
			name: 'FalconSat',
			date: '24th Mar 2006',
			rocket: 'Falcon 1'
		},
		{
			name: 'FalconSat',
			date: '24th Mar 2006',
			rocket: 'Falcon 1'
		},
		{
			name: 'FalconSat',
			date: '24th Mar 2006',
			rocket: 'Falcon 1'
		},
		{
			name: 'FalconSat',
			date: '24th Mar 2006',
			rocket: 'Falcon 1'
		},
		{
			name: 'FalconSat',
			date: '24th Mar 2006',
			rocket: 'Falcon 1'
		}
	]);

	return (
		<>
			<Box>
				<Button
					color="primary"
					variant="contained"
				>Filter by Year</Button>
				<Button
					color="primary"
					variant="contained">
					Sort Descending</Button>
			</Box>
			<Box>
				<LaunchesList launches={launches} />
			</Box>
		</>
	);
};

export default Launches;

Launches.propTypes = {

};
