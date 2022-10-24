<script>
	import { goto } from '$app/navigation';
	import '../../app.css';
	import { host } from '../static';

	/** @type {import('./$types').PageData} */
	export let data;

	const today = new Date();
	let contents = [];
	let imageInput;
	let textVal = '';

	const addContent = async (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			// images.push(e.target.result);
			contents = [...contents, e.target.result];
			if (textVal != '' && textVal != undefined) {
				contents = [...contents, textVal];
			}

			imageInput.value = '';
			textVal = '';
		};
	};

	const PostToServer = async () => {
		if (textVal != '') {
			contents = [...contents, textVal];
		}

		await fetch(`${host}/be/post`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${data.token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ content: contents })
		})
			.then((response) => response.json())
			.then((data) => {
				goto(`${host}/post`);
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
			{#if content.startsWith('data')}
				<img src={content} class="image" alt={content} />
			{:else}
				<p class="content">{content}</p>
			{/if}
		{/each}
		<input
			type="file"
			class="imageInput"
			id="imageInput"
			alt="image"
			accept="image/*"
			on:change={(e) => addContent(e)}
			bind:this={imageInput}
		/>
		<label class="imageInputLabel" for="imageInput">upload Image</label>
		<textarea
			bind:value={textVal}
			style="height : {textVal.match(/[\n]/g) == null
				? 20
				: 20 + textVal.match(/[\n]/g).length * 20}px"
			name="content"
			id="ucontent"
			placeholder="내용"
			class="textInput"
		/>
		<button class="imageInputLabel" on:click={PostToServer}>Post</button>
	</div>
</main>
