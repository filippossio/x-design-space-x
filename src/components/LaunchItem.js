import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginBottom: theme.spacing(2),
	},
	box: {
		flexGrow: 1,
		justifyContent: 'space-between',
	}
}));

const LaunchItem = ({ data, index }) => {
	const classes = useStyles();

	return (
		<>
			<Paper className={classes.paper}>
				<Box py={2} mx={3} display="flex" className={classes.box}>
					<Typography variant="h4">#{index}</Typography>
					<Typography variant="h5">{data.name}</Typography>
					<Box>
						<Typography variant="subtitle1">{data.date}</Typography>
						<Typography variant="subtitle1">{data.rocket}</Typography>
					</Box>
				</Box>
			</Paper>
		</>
	);
};

export default LaunchItem;

LaunchItem.propTypes = {
	data: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
};
