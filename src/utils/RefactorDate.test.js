import { getCorrectDateFormat, getDateYear, getOrdinal } from './RefactorDate';

describe('getCorrectDateFormat', () => {
	it('Exists', () => {
		expect(getCorrectDateFormat).toBeDefined();
	});

	it(('GIVEN the getCorrectDateFormat is called WHEN the input value is correct THEN return date formatted correctly'), () => {
		let value = '1143239400';
		let result = getCorrectDateFormat(value);
		expect(result).toBe('24th Mar 2006');
	});

	it(('GIVEN the getCorrectDateFormat is called WHEN the input value is incoret THEN return date was invalid'), () => {
		let value = 'something';
		let result = getCorrectDateFormat(value);
		expect(result).toBe('Date was not defined');
	});

	it(('GIVEN the getCorrectDateFormat is called WHEN the input value is empty THEN return date was not defined'), () => {
		let value;
		let result = getCorrectDateFormat(value);
		expect(result).toBe('Date was not defined');
	});
});

describe('getDateYear', () => {
	it('Exists', () => {
		expect(getDateYear).toBeDefined();
	});

	it(('GIVEN the getDateYear is called WHEN the input value is correct THEN return the year correctly'), () => {
		let value = '1143239400';
		let result = getDateYear(value);
		expect(result).toBe(2006);
	});

	it(('GIVEN the getDateYear is called WHEN the input value is incoret THEN return NaN'), () => {
		let value = 'something';
		let result = getDateYear(value);
		expect(result).toBe('Date was not defined');
	});

	it(('GIVEN the getDateYear is called WHEN the input value is empty THEN return date was not defined'), () => {
		let value;
		let result = getDateYear(value);
		expect(result).toBe('Date was not defined');
	});
});

describe('getOrdinal', () => {
	it('Exists', () => {
		expect(getOrdinal).toBeDefined();
	});

	it(('GIVEN the getOrdinal is called WHEN the input value is correct THEN return the ordinal correcly'), () => {
		let value = '22';
		let result = getOrdinal(value);
		expect(result).toBe('nd');
	});

	it(('GIVEN the getOrdinal is called WHEN the input value is correct THEN return the ordinal correcly'), () => {
		let value = '1';
		let result = getOrdinal(value);
		expect(result).toBe('st');
	});

	it(('GIVEN the getOrdinal is called WHEN the input value is correct THEN return the ordinal correcly'), () => {
		let value = '2';
		let result = getOrdinal(value);
		expect(result).toBe('nd');
	});

	it(('GIVEN the getOrdinal is called WHEN the input value is correct THEN return the ordinal correcly'), () => {
		let value = '3';
		let result = getOrdinal(value);
		expect(result).toBe('rd');
	});

	it(('GIVEN the getOrdinal is called WHEN the input value is correct THEN return the ordinal correcly'), () => {
		let value = '4';
		let result = getOrdinal(value);
		expect(result).toBe('th');
	});

	it(('GIVEN the getOrdinal is called WHEN the input value is incoret THEN return th as default'), () => {
		let value = 'something';
		let result = getOrdinal(value);
		expect(result).toBe('th');
	});

	it(('GIVEN the getOrdinal is called WHEN the input value is empty THEN return empty'), () => {
		let value;
		let result = getOrdinal(value);
		expect(result).toBe();
	});
});