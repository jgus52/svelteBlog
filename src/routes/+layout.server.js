/** @type {import('./$types').LayoutServerLoad} */
export async function load(d) {
	return { token: d.cookies.get('token') };
}
