import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LaunchItem from './LaunchItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StateContext } from '../providers/StateProvider';

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

const LaunchesList = ({ year }) => {
	const classes = useStyles();
	const { launches, isLoading, error } = useContext(StateContext);

	if (isLoading || !launches) {
		return (
			<div className={classes.root}>
				<div className={classes.wrapper}>
					<CircularProgress size={68} className={classes.fabProgress} />
				</div>
			</div>
		);
	}
	else if (!isLoading && error) {
		return (
			<h1>Opps something went wrong</h1>
		);
	}
	else if (launches) {
		if (year === '') {
			return launches.map((launch, index) => {
				return (
					<LaunchItem
						key={index}
						data={launch} />
				);
			});
		}
		else {
			return launches.filter((launch) => {
				return launch.date_year === year;
			}).map((launch, index) => {
				return (
					<LaunchItem
						key={index}
						data={launch} />
				);
			});
		}
	}
};

export default LaunchesList;
