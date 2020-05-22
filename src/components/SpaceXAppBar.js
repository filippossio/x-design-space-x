import React, { useContext } from 'react';
import { StateContext } from '../providers/StateProvider';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typograpgy from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import Hidden from '@material-ui/core/Hidden';
import spaceXlogo from '../assets/spacex-logo.png';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginBottom: '32px',
	},
	logo: {
		height: '30px',
	},
	text: {
		flexGrow: 1,
		paddingTop: '15px',
	},
	button: {
		position: 'absolute',
		right: '0px',
		borderTopLeftRadius: '20px',
		borderBottomLeftRadius: '20px',
		borderTopRightRadius: '0px',
		borderBottomRightRadius: '0px',
		[theme.breakpoints.down('sm')]: {
			height: '30px',
		}
	}
}));

const SpaceXAppBar = () => {
	const classes = useStyles();

	const { callGetLaunches } = useContext(StateContext);


	return (
		<>
			<div className={classes.root}>
				<AppBar position="static" color="inherit">
					<Toolbar>
						<img
							className={classes.logo}
							src={spaceXlogo}
							alt="space x logo" />
						<Hidden xsDown>
							<Typograpgy
								className={classes.text}>LAUNCHES</Typograpgy>
						</Hidden>
						<Button
							className={classes.button}
							color="primary"
							variant="contained"
							endIcon={<RefreshIcon />}
							onClick={callGetLaunches}
						>
							<Hidden xsDown>Reload Data</Hidden></Button>
					</Toolbar>
				</AppBar>
			</div>
		</>
	);
};

export default SpaceXAppBar;
