// operations that do not need the sever
// you cannot use the window object here
// you do not have the relative path of you page here
// use external api's fetching here for example

import { get } from '$lib/data/fetch';

// or your API if you know your baseurl
export const load: import('./$types').PageLoad = async function () {
	const data = await get<{ message: string }>('http://127.0.0.1:5173/api/hello-world');

	return {
		data: data,
		loading: true
	};
};
