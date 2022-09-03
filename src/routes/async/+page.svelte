<script lang="ts">
	// execute after server load
	console.log('async load before data'); // 3
	export let data: import('./$types').PageData;
	console.log('async load after data'); // 4
</script>

<h1>async</h1>

{data.data}
