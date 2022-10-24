import { writable, derived } from 'svelte/store';
import { error } from '@sveltejs/kit';
import { host } from '../../static';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, parent }) {
	const { token } = await parent();

	const response = await fetch(`${host}/be/post?id=${params.slug}`);
	const data = await response.json();

	post.set(data);

	return { ...data, token };
}

export const post = writable();

export const content = writable([]);

export const getContent = derived(post, ($post) => {
	if ($post) {
		return $post.content;
	}
	return [];
});
