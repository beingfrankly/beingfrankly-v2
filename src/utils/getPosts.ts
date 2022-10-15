export default async function getPosts() {

	return fetch(`${import.meta.env.API_URL}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
		},
	}).then((response) => response.json());

}
