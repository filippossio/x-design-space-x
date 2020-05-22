import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LaunchesList from './LaunchesList';


const Launches = () => {
	return (
		<>
			<Box display="flex" justifyContent="flex-end" px={3}>
				<Button
					color="primary"
					variant="contained"
				>Filter by Year</Button>
				<Button
					color="primary"
					variant="contained"
					style={{ marginLeft: '10px' }}>
					Sort Descending</Button>
			</Box>
			<Box>
				<LaunchesList />
			</Box>
		</>
	);
};

export default Launches;

Launches.propTypes = {

};
