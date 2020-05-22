import React from 'react';
import MainContainer from '../components/MainContainer';
import SpaceXAppBar from '../components/SpaceXAppBar';
import { StateProvider } from '../providers/StateProvider';

const Application = () => {

	return (
		<>
			<StateProvider>
				<SpaceXAppBar />
				<MainContainer />
			</StateProvider>
		</>
	);
};

export default Application;
