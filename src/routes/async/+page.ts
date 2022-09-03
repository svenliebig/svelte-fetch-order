import { wait } from '$lib/wait'

export const load: import('./$types').PageLoad = async function () {
	console.log("async load before wait") // 1
	await wait(3000)
	console.log("async load after wait") // 2
	return {
		data: "Hello world."
	}
}