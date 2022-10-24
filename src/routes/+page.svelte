<script>
	import '../app.css';
	import pic from './pic.jpg';
	import { onMount } from 'svelte';
	import { post, getContent, getId } from './+page.js';

	onMount(async () => {});
	/** @type {import('./$types').PageData} */
	export let data;
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
					href="{data.host}/editPost/{$getId}"
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
			{#if $getId != null}
				<div style="width: 100%; display: flex; justify-content: space-between">
					<a
						style="text-decoration: none; margin: 20px 50px 20px 0px;"
						href="/post/{data.id + 1}"
						class="imageInputLabel">prev</a
					>
					<a
						style="text-decoration: none"
						href="{data.host}/post/{$getId - 1}"
						class="imageInputLabel">next</a
					>
				</div>
			{/if}
		</div>
	</section>
</main>

<style>
</style>
