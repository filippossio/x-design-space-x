import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LaunchesList from './LaunchesList';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { StateContext } from '../providers/StateProvider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		minWidth: 180,
		[theme.breakpoints.down('sm')]: {
			height: '56px',
		}
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));


const Launches = () => {
	const [ascending, setAscending] = useState(false);
	const { sortData, years } = useContext(StateContext);
	const [year, setYear] = React.useState('');

	const classes = useStyles();


	const changeOrder = () => {
		setAscending(!ascending);
		sortData(ascending);
	};

	const handleChange = (event) => {
		setYear(event.target.value);
	};

	return (
		<>
			<Box display="flex" justifyContent="flex-end" px={3}>
				<FormControl variant="filled" className={classes.button}>
					<InputLabel id="select-by-year-label">Filter by Year</InputLabel>
					<Select
						labelId="select-by-year-label"
						id="select-by-year-select"
						value={year}
						onChange={handleChange}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{years.map((year, index) => (
							<MenuItem key={index} value={year}>{year}</MenuItem>
						))}
					</Select>
				</FormControl>
				<Button
					className={classes.button}
					color="primary"
					variant="contained"
					style={{ marginLeft: '10px' }}
					onClick={changeOrder}
					endIcon={ascending ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}>
					Sort {ascending ? 'Descending' : 'Ascending'}</Button>
			</Box>
			<Box>
				<LaunchesList year={year} />
			</Box>
		</>
	);
};

export default Launches;

Launches.propTypes = {

};
