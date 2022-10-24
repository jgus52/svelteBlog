import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import { host } from '../static';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		// TODO log the user in

		const data = await request.formData();
		const id = data.get('id');
		const pwd = data.get('password');

		const response = await fetch(`${host}/be/auth`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: id,
				pwd: pwd
			})
		});
		if (response.status == 403) return { success: false };
		const token = await response.text();

		cookies.set('token', token);

		return { success: true };
	}
};
