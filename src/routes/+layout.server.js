import dotenv from 'dotenv';

dotenv.config();

export async function load({ fetch, cookies }) {
	return { token: cookies.get('token'), host: process.env.host };
}
