<script>
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	export let file;
	export function contextmenu(e) {
		e.preventDefault();
		dispatch('delete', { file });
	}
	export function click(e) {
		e.preventDefault();
		dispatch('click', { file });
	}
</script>

<div on:contextmenu={contextmenu} on:click|stopPropagation={click}>
	{file.project.name}
	{file.project.number} <br />
	{file.datesaved} <br />
	{file.timesaved}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		min-width: 6rem;
		min-height: 6rem;
		background-color: white;
		border-radius: 6px;
		text-align: center;
		box-shadow: 0px 5px 0 0;
		border: 2px solid black;
		transform: translateY(0);
		cursor: pointer;
		transition: 0.1s ease-in-out;
		user-select: none;
	}
	div:hover {
		box-shadow: 0px 10px 0 0;
		transform: translateY(-5px);
		background-color: greenyellow;
	}
	div:active {
		box-shadow: 0px 0px 0 0;
		transform: translateY(5px);
	}
</style>
