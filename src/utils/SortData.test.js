import { sortByDate, getYear } from './SortData';

const testData = [
	{
		date: 1143239400,
	},
	{
		date: 1174439400
	},
	{
		date: 1217648040
	},
	{
		date: 1222643700
	},
	{
		date: 1247456100
	},
	{
		date: 1275677100
	},
	{
		date: 1291822980
	},
	{
		date: 1291822980
	},
	{
		date: 1335944640
	},
	{
		date: 1349656500
	}
];

const ascendingSortedTestDate = [
	{
		date: 1349656500
	},
	{
		date: 1335944640
	},
	{
		date: 1291822980
	},
	{
		date: 1291822980
	},
	{
		date: 1275677100
	},
	{
		date: 1247456100
	},
	{
		date: 1222643700
	},
	{
		date: 1217648040
	},
	{
		date: 1174439400
	},
	{
		date: 1143239400
	}
];

const descendingSortedTestDate = [
	{
		date: 1143239400
	},
	{
		date: 1174439400
	},
	{
		date: 1217648040
	},
	{
		date: 1222643700
	},
	{
		date: 1247456100
	},
	{
		date: 1275677100
	},
	{
		date: 1291822980
	},
	{
		date: 1291822980
	},
	{
		date: 1335944640
	},
	{
		date: 1349656500
	}

];

const getYearTestData = [
	{
		date: '1143239400'
	},
	{
		date: '1143239400'
	},
	{
		date: '1217648040'
	},
	{
		date: '1349656500'
	},
	{
		date: '1386110460'
	},
	{
		date: '1143239400'
	},
	{
		date: '1410066000'
	},
	{
		date: '1143239400'
	},
	{
		date: '1466000940'
	},
	{
		date: '1466000940'
	}
];

const getYearResult = [
	2006, 2008, 2012, 2013, 2014, 2016
];

describe('sortByDate', () => {
	it('Exists', () => {
		expect(sortByDate).toBeDefined();
	});

	it(('GIVEN the sortByDate is called WHEN the bool is false THEN sort data by ascending order'), () => {
		let value = testData;
		let result = sortByDate(value, false);
		expect(result).toStrictEqual(ascendingSortedTestDate);
	});

	it(('GIVEN the sortByDate is called WHEN the bool is false THEN sort data by ascending order'), () => {
		let value = testData;
		let result = sortByDate(value, true);
		expect(result).toStrictEqual(descendingSortedTestDate);
	});

	it(('GIVEN the sortByDate is called WHEN the input value is incoret THEN return NaN'), () => {
		let value = 'something';
		let result = sortByDate(value, true);
		expect(result).toStrictEqual([]);
	});

	it(('GIVEN the sortByDate is called WHEN the input value is empty THEN return date was not defined'), () => {
		let value;
		let result = sortByDate(value);
		expect(result).toStrictEqual([]);
	});
});


describe('getYear', () => {
	it('Exists', () => {
		expect(getYear).toBeDefined();
	});

	it(('GIVEN the getYear is called WHEN the input is correct THEN return correct array'), () => {
		let value = getYearTestData;
		let result = getYear(value);
		expect(result).toEqual(getYearResult);
	});

	it(('GIVEN the getYear is called WHEN the input is incorrect THEN return []'), () => {
		let value = 'something';
		let result = getYear(value);
		expect(result).toEqual([]);
	});

	it(('GIVEN the getYear is called WHEN the input is empty THEN return []'), () => {
		let value;
		let result = getYear(value);
		expect(result).toEqual([]);
	});
});