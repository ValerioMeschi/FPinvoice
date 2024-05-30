<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function remove(event) {
		event.preventDefault();
		console.log('delete this');
		dispatch('remove', { target: text });
	}
	export let text;
</script>

<div id="row" on:contextmenu={remove}>
	<div>.{text}</div>
</div>

<style>
	#row {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 0;
		text-align: left;
		padding-left: 1%;
	}
</style>
