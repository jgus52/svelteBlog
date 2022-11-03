import adapter from '@sveltejs/adapter-node';
// import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
