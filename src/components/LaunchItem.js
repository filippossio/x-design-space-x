import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
			flexFlow: 'row'
		}
	},
	h4: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		}
	},
	h5: {
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		}
	},
	h6: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		}
	},
	subtitle1: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		}
	}
}));

const LaunchItem = ({ data }) => {
	const classes = useStyles();

	return (
		<>
			<Paper className={classes.paper}>
				<Box pt={2} mx={3} display="flex" className={classes.box}>
					<Typography variant="h4" className={classes.h4}>#{data.id}</Typography>
					<Typography variant="h5" align="left" className={classes.h5}>{data.mission_name}</Typography>
					<Box>
						<Typography variant="subtitle1" align="right" className={classes.subtitle1}>{data.date_formatted}</Typography>
						<Typography variant="h6" align="right" className={classes.h6}>{data.rocket_name}</Typography>
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
