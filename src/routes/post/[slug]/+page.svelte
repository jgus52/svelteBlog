<script>
	import '../../../app.css';
	import pic from '../../pic.jpg';
	import { onMount, afterUpdate } from 'svelte';
	import { post, getContent } from './+page.js';
	import { afterNavigate, goto } from '$app/navigation';
	import { base } from '$app/paths';

	/** @type {import('./$types').PageData} */
	export let data;

	let previousPage = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
		if (data.id == null) {
			goto(previousPage);
		}
	});
	onMount(async () => {
		// post.set(data);
		// date = new Date(data.createdAt);
	});
	// const apiData = async () => {
	// 	let response = await fetch('http://localhost:8080/post', {
	// 		body: JSON.stringify({ id: data.id })
	// 	});
	// 	var ret = await response.json();
	// 	post.set(ret);
	// 	return ret;
	// };
</script>

<main>
	<section>
		<div class="profile">
			<img src={pic} class="image" alt="profile" />
			<p>Jgus</p>
			<a href="https://www.instagram.com/jgus_52/">instagram</a>
		</div>
		<div class="post">
			<div style="width: 100%; display: flex; justify-content: space-between">
				<p class="title">{data?.date}</p>
				<a
					rel="external"
					style="text-decoration: none"
					href="{data.host}/editPost/{data.id}"
					class="imageInputLabel">edit</a
				>
			</div>

			{#each $getContent as content}
				{#if content.startsWith('https://jgblog-image.s3')}
					<img src={content} class="image" alt={content} />
				{:else}
					<p class="content">{content}</p>
				{/if}
			{/each}
			<div style="width: 100%; display: flex; justify-content: space-between">
				<a
					style="text-decoration: none; margin: 20px 50px 20px 0px;"
					href="/post/{data.id + 1}"
					class="imageInputLabel">prev</a
				>
				<!-- <a style="text-decoration: none" href="/post/{data.id - 1}" class="imageInputLabel">next</a> -->
				<a
					style="text-decoration: none"
					href="{data.host}/post/{data.id - 1}"
					class="imageInputLabel">next</a
				>
			</div>
		</div>
	</section>
</main>

<style>
</style>
