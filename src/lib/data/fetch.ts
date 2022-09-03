import { writable } from 'svelte/store';

export async function get<T>(url: string) {
	const response = await fetch(url);
	return (await response.json()) as T;
}

export async function storedGet<T>(url: string) {
	const store = writable<Promise<T>>(new Promise(() => null));

	fetch(url)
		.then((response) => response.json())
		.then((data) => store.set(Promise.resolve(data)));

	return store;
}
