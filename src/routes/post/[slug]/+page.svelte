<script>
	import '../../../app.css';
	import pic from '../../pic.jpg';
	import { onMount, afterUpdate } from 'svelte';
	import { post, getContent } from './+page.js';
	import { afterNavigate, goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { imgPrefix, instagramLink } from '../../static.js';

	/** @type {import('./$types').PageData} */
	export let data;

	let previousPage = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
		if (data.id == null) {
			goto(previousPage);
		}
	});
	onMount(async () => {});
</script>

<main>
	<section>
		<div class="profile">
			<img src={pic} class="image" alt="profile" />
			<p>Jgus</p>
			<a href={instagramLink}>instagram</a>
		</div>
		<div class="post">
			<div style="width: 100%; display: flex; justify-content: space-between">
				<p class="title">{data?.date}</p>
				<a
					rel="external"
					style="text-decoration: none"
					href="/editPost/{data.id}"
					class="imageInputLabel">edit</a
				>
			</div>

			{#each $getContent as content}
				{#if content.startsWith(imgPrefix)}
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
				<a style="text-decoration: none" href="/post/{data.id - 1}" class="imageInputLabel">next</a>
			</div>
		</div>
	</section>
</main>

<style>
</style>
