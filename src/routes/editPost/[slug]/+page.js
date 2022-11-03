/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, parent }) {
	const { token } = await parent();

	return { idx: Number(params.slug), token };
}
