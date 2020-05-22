import { getLaunches } from './SpaceXApi';

describe('Space X api calls', () => {
	it('Exists', () => {
		expect(getLaunches).toBeDefined();
	});
});