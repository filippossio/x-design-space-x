import { getDateYear } from '../utils/RefactorDate';
function sortByDate(data, bool) {
	return bool ? data.sort((a, b) => a.date - b.date) : data.sort((a, b) => b.date - a.date);
}

function getYear(data) {
	return data.map((dt) => {
		return getDateYear(dt.date);
	}).reduce((unique, item) => {
		return unique.includes(item) ? unique : [...unique, item];
	}, []);
}
export { sortByDate, getYear };