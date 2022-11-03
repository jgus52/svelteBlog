/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/editPost') || event.url.pathname.startsWith('/addPost')) {
		if (event.cookies.get('token') == undefined) {
			return new Response('need login');
		}
		const response = await resolve(event);
		return response;
	}
	const response = await resolve(event);
	return response;
}
