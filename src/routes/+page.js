import { writable, derived } from 'svelte/store';

export const post = writable();

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, url }) {
	const response = await fetch(`https://www.jjjgus.site/be/post`);
	let data = null;
	try {
		data = await response.json();
	} catch (e) {}

	post.set(data);

	return { ...data, date: new Date(data?.createdAt).toDateString() };
	if (params.slug) {
		// let id = params.slug;
		return { id: params.slug };
	}

	throw error(404, 'Not found');
}

export const getContent = derived(post, ($post) => {
	if ($post) {
		return $post.content;
	}
	return [];
});

export const getId = derived(post, ($post) => {
	if ($post) {
		return $post.id;
	}

	return null;
});
