import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getLaunches } from '../services/SpaceXApi';
import { refactorLaunchesToArray } from '../utils/RefactorLaunches';
import { sortByDate, getYear } from '../utils/SortData';


export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
	const [launches, setLaunches] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [years, setYears] = useState([]);


	useEffect(() => {
		callGetLaunches();
	}, []);

	const callGetLaunches = () => {
		setIsLoading(true);
		getLaunches().then((res) => {
			let array = refactorLaunchesToArray(res);
			setLaunches(array, setIsLoading(false));
			setYears(getYear(array));
		}).catch(() => {
			setError(true);
			setIsLoading(false);
		});

	};

	const sortData = (bool) => {
		setIsLoading(true);
		setLaunches(sortByDate(launches, bool), setIsLoading(false));
	};

	return (
		<StateContext.Provider value={{ launches, error, isLoading, callGetLaunches, sortData, years }}>
			{children}
		</StateContext.Provider >
	);
};


StateProvider.propTypes = {
	children: PropTypes.node
};
