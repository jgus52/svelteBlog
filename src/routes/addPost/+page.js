/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { token, host } = await parent();

	return { token, host };
}
