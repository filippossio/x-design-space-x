function refactorLaunchesToArray(result) {
	return result.data.map((item) => {
		return {
			id: item.flight_number,
			mission_name: item.mission_name,
			rocket_name: item.rocket.rocket_name,
			date: item.launch_date_unix
		};
	});
}

export { refactorLaunchesToArray };