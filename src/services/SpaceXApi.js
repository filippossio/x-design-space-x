import axios from 'axios';

const BASE_API = 'https://api.spacexdata.com/v3/launches';

function getLaunches() {
	return new Promise((resolve, reject) => {
		axios.get(BASE_API)
			.then(res => {
				resolve(res);
			}).catch((error) => {
				reject(error);
			});
	});
}

export { getLaunches };