import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LaunchItem from './LaunchItem';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		height: '100%',
	},
	wrapper: {
		margin: theme.spacing(1),
		position: 'relative',
		marginTop: '100px',
	},
}));

const LaunchesList = ({ launches, loading, error }) => {
	const classes = useStyles();
	if (loading || !launches) {
		return (
			<div className={classes.root}>
				<div className={classes.wrapper}>
					<CircularProgress size={68} className={classes.fabProgress} />
				</div>
			</div>
		);
	}
	else if (!loading && error) {
		return (
			<h1>Opps something went wrong</h1>
		);
	}
	else if (launches) {
		return launches.map((launch, index) => {
			return (
				<LaunchItem
					key={index}
					data={launch} />);
		});
	}
};

export default LaunchesList;

LaunchesList.propTypes = {
	launches: PropTypes.array,
	loading: PropTypes.bool,
	error: PropTypes.bool,
};
