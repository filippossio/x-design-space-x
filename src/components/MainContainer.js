import React from 'react';
import Grid from '@material-ui/core/Grid';
import Launches from './Launches';
import Hidden from '@material-ui/core/Hidden';

const MainContainer = () => {
	return (
		<>
			<Grid container spacing={4}>
				<Hidden smDown>
					<Grid item md={5}>
						<img style={{ width: '100%' }}
							src="/images/launch-home.png"
							srcSet="/images/launch-home@2x.png 2x, /images/launch-home@3x.png 3x"
							alt="Rocket launching" />
					</Grid>
				</Hidden>
				<Grid item xs md={7}>
					<Launches />
				</Grid>
			</Grid>
		</>
	);
};

export default MainContainer;
