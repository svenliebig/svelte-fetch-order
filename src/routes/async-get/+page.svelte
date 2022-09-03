<script lang="ts">
	import { get, storedGet } from '$lib/data/fetch';
	export let data: import('./$types').PageData;
	const inlineData = get<{ message: string }>('/api/hello-world');
	const $storeData = storedGet<{ message: string }>('/api/hello-world');
</script>

<h1>async get</h1>

<h2>Resolved in load function, page waited until this data was here</h2>
<p>
	{data.loading}
	{data.data.message}
</p>

<h2>traditional</h2>

<h3>Await Syntax</h3>
{#await inlineData}
	loading...
{:then dataResolved}
	{dataResolved.message}
{:catch e}
	{e}
{/await}

<h3>Await without loading state</h3>
{#await inlineData then resolved}
	{resolved.message}
{:catch error}
	error... {error}
{/await}

<h3>Await without loading state</h3>
{#await inlineData then resolved}
	{resolved.message}
{:catch error}
	error... {error}
{/await}

<h2>store</h2>

{#await $storeData}
	loading...
{:then dataResolved}
	{dataResolved.message}
{:catch e}
	{e}
{/await}
