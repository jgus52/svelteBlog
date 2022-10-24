<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { host } from '../static';
	/** @type {import('./$types').ActionData} */
	export let form;

	onMount(async () => {
		if (form?.success) goto(`${host}`);
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
