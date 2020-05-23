import { getLaunches } from './SpaceXApi';
import axios from 'axios';
import { data } from './SpaceXMockData';

jest.mock('axios');

describe('Space X api calls', () => {
	it('Exists', () => {
		expect(getLaunches).toBeDefined();
	});

	it('GIVEN getLauches is called WHEN thr response is correct THEN ir should be eqaul to the data.', () => {
		axios.get.mockResolvedValue(data);
		return getLaunches()
			.then(res => {
				expect(res).toBeDefined();
				expect(res).toEqual(data);
			});
	});

	it('GIVEN getLauches is called WHEN thr response is incorrect THEN ir should be eqaul to the data.', () => {
		axios.get.mockRejectedValue(data);
		return getLaunches()
			.catch(error => {
				expect(error).toBeDefined();
			});
	});
}); 