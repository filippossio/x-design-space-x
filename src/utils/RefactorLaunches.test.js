import { refactorLaunchesToArray } from './RefactorLaunches';

const testData = {
	data:
		[
			{
				'flight_number': 1,
				'mission_name': 'FalconSat',
				'launch_year': '2006',
				'launch_date_unix': 1143239400,
				'launch_date_utc': '2006-03-24T22:30:00.000Z',
				'launch_date_local': '2006-03-25T10:30:00+12:00',
				'is_tentative': false,
				'tentative_max_precision': 'hour',
				'tbd': false,
				'launch_window': 0,
				'rocket': {
					'rocket_id': 'falcon1',
					'rocket_name': 'Falcon 1',
				},
			},
			{
				'flight_number': 2,
				'mission_name': 'DemoSat',
				'launch_year': '2007',
				'launch_date_unix': 1174439400,
				'launch_date_utc': '2007-03-21T01:10:00.000Z',
				'launch_date_local': '2007-03-21T13:10:00+12:00',
				'rocket': {
					'rocket_id': 'falcon1',
					'rocket_name': 'Falcon 1',
				},
			},
			{
				'flight_number': 3,
				'mission_name': 'Trailblazer',
				'launch_year': '2008',
				'launch_date_unix': 1217648040,
				'launch_date_utc': '2008-08-02T03:34:00.000Z',
				'launch_date_local': '2008-08-02T15:34:00+12:00',
				'is_tentative': false,
				'tentative_max_precision': 'hour',
				'tbd': false,
				'launch_window': 0,
				'rocket': {
					'rocket_id': 'falcon1',
					'rocket_name': 'Falcon 1',
				},
			}
		]
};

const testResult = [
	{
		'date': 1143239400,
		'date_formatted': '24th Mar 2006',
		'date_year': 2006,
		'id': 1,
		'mission_name': 'FalconSat',
		'rocket_name': 'Falcon 1'
	},
	{
		'date': 1174439400,
		'date_formatted': '21st Mar 2007',
		'date_year': 2007,
		'id': 2,
		'mission_name': 'DemoSat',
		'rocket_name': 'Falcon 1'
	},
	{
		'date': 1217648040,
		'date_formatted': '2nd Aug 2008',
		'date_year': 2008,
		'id': 3,
		'mission_name': 'Trailblazer', 'rocket_name': 'Falcon 1'
	}];

describe(('refactorLaunchesToArray'), () => {
	it('Exists', () => {
		expect(refactorLaunchesToArray).toBeDefined();
	});

	it(('GIVEN the refactorLaunchesToArray is called WHEN the input is correct THEN return correct sub object'), () => {
		let value = testData;
		let result = refactorLaunchesToArray(value);
		expect(result).toEqual(testResult);
	});

	it(('GIVEN the refactorLaunchesToArray is called WHEN the input is incorrect THEN return empty array'), () => {
		let value = 'something wrong';
		let result = refactorLaunchesToArray(value);
		expect(result).toEqual([]);
	});

	it(('GIVEN the refactorLaunchesToArray is called WHEN the input is empty THEN return empty array'), () => {
		let value;
		let result = refactorLaunchesToArray(value);
		expect(result).toEqual([]);
	});

});