import { writable, derived } from 'svelte/store';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, parent }) {
	const { token } = await parent();
	console.log(token);
	const response = await fetch(`https://www.jjjgus.site/be/post?id=${params.slug}`);
	const data = await response.json();

	post.set(data);

	return { ...data, token };
	if (params.slug) {
		// let id = params.slug;
		return { id: params.slug };
	}

	throw error(404, 'Not found');
}

export const post = writable();

export const content = writable([]);

export const getContent = derived(post, ($post) => {
	if ($post) {
		return $post.content;
	}
	return [];
});
