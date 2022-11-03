<script>
	import '../../../app.css';
	import pic from '../../pic.jpg';
	import { posts, updatePosts } from '../../posts';
	import { imgPrefix, instagramLink } from '../../static.js';

	/** @type {import('./$types').PageData} */
	export let data;

	$updatePosts;
	let post = $posts ? $posts[data.idx] : null;
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
					href="/editPost/{data.idx}"
					class="imageInputLabel">edit</a
				>
			</div>

			{#each post?.content as content}
				{#if content.startsWith(imgPrefix)}
					<img src={content} class="image" alt={content} />
				{:else}
					<p class="content">{content}</p>
				{/if}
			{/each}
			<div style="width: 100%; display: flex; justify-content: space-between">
				<a
					style="visibility: {data.idx == 0
						? 'hidden'
						: 'visible'}; text-decoration: none; margin: 20px 50px 20px 0px;"
					href="/post/{data.idx - 1}"
					class="imageInputLabel">prev</a
				>
				<!-- <a style="text-decoration: none" href="/post/{data.id - 1}" class="imageInputLabel">next</a> -->
				<a
					style="visibility: {data.idx + 1 == $posts?.length
						? 'hidden'
						: 'visible'}; text-decoration: none"
					href="/post/{data.idx + 1}"
					class="imageInputLabel">next</a
				>
			</div>
		</div>
	</section>
</main>

<style>
</style>
