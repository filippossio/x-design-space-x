import { getDateYear } from '../utils/RefactorDate';

function sortByDate(data, bool) {
	if (!Array.isArray(data)) {
		return ([]);
	}
	return bool ? data.sort((a, b) => a.date - b.date) : data.sort((a, b) => b.date - a.date);
}

function getYear(data) {
	if (!Array.isArray(data)) {
		return ([]);
	}
	return data.map((dt) => {
		return getDateYear(dt.date);
	}).reduce((unique, item) => {
		return unique.includes(item) ? unique : [...unique, item];
	}, []);
}
export { sortByDate, getYear };