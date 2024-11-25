const url = 'http://localhost:3000/';

async function getData(route: string) {
	try {
		const response = await fetch(url + route);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const json = await response.json();
		return json;
	} catch (error) {
		console.error('There was a problem with your fetch operation:', error);
	}
}

export default getData;
