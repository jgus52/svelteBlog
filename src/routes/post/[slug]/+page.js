import { writable, derived } from 'svelte/store';
import { error, redirect } from '@sveltejs/kit';
import { page } from '$app/stores';
import { afterNavigate, goto } from '$app/navigation';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, url }) {
	const response = await fetch(`https://www.jjjgus.site/be/post?id=${params.slug}`);
	let data = null;
	try {
		data = await response.json();
	} catch (e) {
		console.log(e);
	}

	if (data == null) {
		throw redirect(303, url.origin);
	}

	post.set(data);

	return { ...data, date: new Date(data.createdAt).toDateString() };
	if (params.slug) {
		// let id = params.slug;
		return { id: params.slug };
	}

	throw error(404, 'Not found');
}

export const post = writable();

export const getContent = derived(post, ($post) => {
	if ($post) {
		return $post.content;
	}
	return [];
});
