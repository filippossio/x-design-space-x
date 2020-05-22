import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { getCorrectDateFormat } from '../utils/RefactorDate';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginBottom: theme.spacing(2),
	},
	box: {
		flexGrow: 1,
		justifyContent: 'space-between',
	}
}));

const LaunchItem = ({ data }) => {
	const classes = useStyles();

	data = {
		...data,
		date: getCorrectDateFormat(data.date),
	};

	return (
		<>
			<Paper className={classes.paper}>
				<Box py={2} mx={3} display="flex" className={classes.box}>
					<Typography variant="h4">#{data.id}</Typography>
					<Typography variant="h5">{data.mission_name}</Typography>
					<Box>
						<Typography variant="subtitle1">{data.date}</Typography>
						<Typography variant="subtitle1">{data.rocket_name}</Typography>
					</Box>
				</Box>
			</Paper>
		</>
	);
};

export default LaunchItem;

LaunchItem.propTypes = {
	data: PropTypes.object.isRequired,
};
