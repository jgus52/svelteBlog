<script>
	import '../../../app.css';
	import { goto } from '$app/navigation';
	import { host, imgPrefix } from '../../static';
	import { posts } from '../../posts';

	/** @type {import('./$types').PageData} */
	export let data;

	let post = $posts ? $posts[data?.idx] : null;
	let contents = post?.content;

	const update = async () => {
		await self
			.fetch(`${host}/be/editPost`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${data.token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ id: post.id, content: contents })
			})
			.then(() => {
				goto(`${host}/post/${data.idx}`);
			})
			.catch((e) => {
				return null;
			});
	};
</script>

<main>
	<div class="addPostBox">
		<p class="title">{post.date}</p>
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

		<button class="imageInputLabel" on:click={update}>Update</button>
	</div>
</main>
