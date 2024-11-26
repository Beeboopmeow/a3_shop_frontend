const url = 'http://localhost:3000/';

async function deleteData(route: string) {
	try {
		const response = await fetch(url + route, {
			method: 'DELETE'
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const json = await response.json();
		return json;
	} catch (error) {
		console.error('There was a problem with your fetch operation:', error);
	}
}

export default deleteData;
