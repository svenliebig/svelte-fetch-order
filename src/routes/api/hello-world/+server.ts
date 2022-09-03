export const GET: import('./$types').RequestHandler = function ({ url, routeId, request }) {
	return new Response(JSON.stringify({ message: 'Hello Fetch!' }));
};
