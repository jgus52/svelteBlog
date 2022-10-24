<script>
	import '../../../app.css';
	import { onMount, afterUpdate } from 'svelte';
	import { post, getContent } from './+page.js';
	import { goto } from '$app/navigation';
	import { host, imgPrefix } from '../../static';

	/** @type {import('./$types').PageData} */
	export let data;

	const today = new Date();
	let contents = [];
	let imageInput;
	let textVal;

	onMount(async () => {
		contents = $getContent;
	});

	afterUpdate(async () => {});

	const update = async () => {
		await self
			.fetch(`${host}/be/editPost`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${data.token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ id: data.id, content: contents })
			})
			.then(() => {
				goto(`${host}/post/${data.id}`);
			})
			.catch((e) => {
				return null;
			});
	};
</script>

<main>
	<div class="addPostBox">
		<p class="title">{today.toLocaleDateString()}</p>
		{#each contents as content}
			{#if content.startsWith(imgPrefix)}
				<img src={content} class="image" alt={content} />
			{:else}
				<textarea
					style="height: {content.match(/[\n]/g) == null
						? 20
						: 20 + content.match(/[\n]/g).length * 20}px"
					bind:value={content}
					class="textInput"
				/>
			{/if}
		{/each}
		<input
			type="file"
			class="imageInput"
			id="imageInput"
			alt="image"
			accept="image/*"
			bind:this={imageInput}
		/>
		<button class="imageInputLabel" on:click={update}>Update</button>
	</div>
</main>
