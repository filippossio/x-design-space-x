import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { getCorrectDateFormat } from '../utils/RefactorDate';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
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
				<Box pt={2} mx={3} display="flex" className={classes.box}>
					<Typography variant="h4">#{data.id}</Typography>
					<Typography variant="h5" align="left">{data.mission_name}</Typography>
					<Box>
						<Typography variant="subtitle1" align="right">{data.date}</Typography>
						<Typography variant="h6" align="right">{data.rocket_name}</Typography>
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
