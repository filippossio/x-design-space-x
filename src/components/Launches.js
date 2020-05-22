import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LaunchesList from './LaunchesList';
import { getLaunches } from '../services/SpaceXApi';
import { refactorLaunchesToArray } from '../utils/RefactorLaunches';


const Launches = () => {
	const [launches, setLaunches] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getLaunches().then((res) => {
			setLaunches(refactorLaunchesToArray(res), setIsLoading(false));
		}).catch(() => {
			setError(true);
			setIsLoading(false);
		});
	}, []);



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
				<LaunchesList launches={launches} loading={isLoading} error={error} />
			</Box>
		</>
	);
};

export default Launches;

Launches.propTypes = {

};
