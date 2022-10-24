export async function load({ fetch, cookies }) {
	return { token: cookies.get('token') };
}
