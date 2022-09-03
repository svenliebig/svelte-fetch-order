<script lang="ts">
	// executed after load
	console.log('async server load before data');
	export let data: import('./$types').PageData;
	console.log('async server load after data');
</script>

<h1>async server</h1>

{data.data}
