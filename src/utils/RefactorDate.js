function getCorrectDateFormat(dt) {
	if (!dt) {
		return 'Date was not defined';
	}
	var utcSeconds = dt;
	var date = new Date(0);
	date.setUTCSeconds(utcSeconds);
	if (!(date instanceof Date && !isNaN(date))) {
		return 'Date was not defined';
	}
	let d = date.getDate();
	let ordinal = getOrdinal(d);

	let month = date.toLocaleString('default', { month: 'short' });

	return `${d}${ordinal} ${month} ${date.getFullYear()}`;
}

function getOrdinal(d) {
	if (!d) {
		return;
	}
	if (d > 3 && d < 21) return 'th';
	switch (d % 10) {
		case 1: return 'st';
		case 2: return 'nd';
		case 3: return 'rd';
		default: return 'th';
	}
}

function getDateYear(dt) {
	if (!dt) {
		return 'Date was not defined';
	}
	var date = new Date(0);
	var utcSeconds = dt;
	date.setUTCSeconds(utcSeconds);
	if (date instanceof Date && !isNaN(date)) {
		return date.getFullYear();
	} else {
		return 'Date was not defined';
	}
}

export { getCorrectDateFormat, getDateYear, getOrdinal };