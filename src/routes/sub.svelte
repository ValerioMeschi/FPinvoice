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
	<div>{text}</div>
</div>

<style>
	#row {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 0rem;
		text-align: left;
		padding-left: 2rem;
	}
</style>
