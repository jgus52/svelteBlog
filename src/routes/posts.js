import { derived, writable } from 'svelte/store';
import { host } from './static';

export const posts = writable([]);

export const updatePosts = derived(posts, async ($posts) => {
	if ($posts.length == 0) {
		console.log('update');
		const response = await fetch(`${host}/be/posts`);
		let data = await response.json();
		data.forEach((element) => {
			element.date = new Date(element.createdAt).toDateString();
		});
		// data.reverse();
		posts.set(data);
	}
});

export const addNewPost = derived(posts, async ($posts) => {
	const response = await fetch(`${host}/be/post`);
	let data = await response.json();
	if ($posts.length != 0 && $posts[0] === data) return;
	posts.set([data, ...$posts]);
});
