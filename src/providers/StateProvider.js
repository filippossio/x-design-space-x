import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getLaunches } from '../services/SpaceXApi';
import { refactorLaunchesToArray } from '../utils/RefactorLaunches';


export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
	const [launches, setLaunches] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);


	useEffect(() => {
		callGetLaunches();
	}, []);

	const callGetLaunches = () => {
		setIsLoading(true);
		getLaunches().then((res) => {
			setLaunches(refactorLaunchesToArray(res), setIsLoading(false));
		}).catch(() => {
			setError(true);
			setIsLoading(false);
		});
	};

	return (
		<StateContext.Provider value={{ launches, error, isLoading, callGetLaunches }}>
			{children}
		</StateContext.Provider>
	);
};


StateProvider.propTypes = {
	children: PropTypes.node
};
