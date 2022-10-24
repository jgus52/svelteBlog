<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	/** @type {import('./$types').ActionData} */
	export let form;

	onMount(async () => {
		if (form?.success) goto(`https://www.jjjgus.site`);
	});
</script>

<main>
	<form method="POST">
		<input name="id" type="text" />
		<input name="password" type="password" />
		<button>Log in</button>
	</form>
	{#if form?.success == false}
		<p>retry</p>
	{/if}
</main>
