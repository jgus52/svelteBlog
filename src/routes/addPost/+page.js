/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { token } = await parent();

	return { token };
}
