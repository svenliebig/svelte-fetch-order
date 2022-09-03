import { wait } from '$lib/wait'

export const load: import('./$types').PageServerLoad = async function () {
	await wait(5000)
	return {
		data: "Hello world."
	}
}