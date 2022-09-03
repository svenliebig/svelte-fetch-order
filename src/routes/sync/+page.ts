
export const load: import('./$types').PageLoad = function () {
	let data = "hello..."
	console.log("hello")
	setTimeout(() => {
		data = "hello world"
		console.log("timed world")
	}, 5000)
	console.log("world")
	return {
		data: data
	}
}