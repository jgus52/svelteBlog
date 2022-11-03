<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import pic from './pic.jpg';
	import { posts, updatePosts } from './posts.js';
	import { imgPrefix, instagramLink } from './static';

	let idx = 0;
	let post = $posts ? $posts[idx] : null;
	$updatePosts.then(() => (post = $posts[idx]));
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
				<p class="title">{post?.date}</p>
				<a
					rel="external"
					style="text-decoration: none"
					href="/editPost/{idx}"
					class="imageInputLabel">edit</a
				>
			</div>
			{#if post}{#each post.content as content}
					{#if content.startsWith(imgPrefix)}
						<img src={content} class="image" alt={content} />
					{:else}
						<p class="content">{content}</p>
					{/if}
				{/each}{/if}
			<div style="width: 100%; display: flex; justify-content: space-between">
				<a style="visibility: hidden" href="/post/{idx + 1}" class="imageInputLabel">next</a>
				<a style="text-decoration: none" href="/post/{idx + 1}" class="imageInputLabel">next</a>
			</div>
		</div>
	</section>
</main>

<style>
</style>
