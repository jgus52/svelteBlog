/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, url }) {
	return { idx: Number(params.slug) };
}
