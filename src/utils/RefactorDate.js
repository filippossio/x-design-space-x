function getCorrectDateFormat(dt) {
	var utcSeconds = dt;
	var date = new Date(0); // The 0 there is the key, which sets the date to the epoch
	date.setUTCSeconds(utcSeconds);
	let d = date.getDay();
	let ordinal = '';

	if (d > 3 && d < 21) ordinal = 'th';
	switch (d % 10) {
		case 1: ordinal = 'st';
			break;
		case 2: ordinal = 'nd';
			break;
		case 3: ordinal = 'rd';
			break;
		default: ordinal = 'th';
			break;
	}
	let month = date.toLocaleString('default', { month: 'short' });


	return `${date.getDay()}${ordinal} ${month} ${date.getFullYear()}`;
}

export { getCorrectDateFormat };