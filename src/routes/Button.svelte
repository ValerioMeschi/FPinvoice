<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
	export let label = 'button';
	export let type = 'small';
	export let col = 'white';
</script>

<button class="{type} {col}" on:click={click}>{label}</button>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		margin: 0;
		margin-bottom: calc(3px + 0.5rem);
		padding: 0.3rem 0.7rem 0.3rem 0.7rem;
		text-transform: uppercase;
		border: 2px solid black;
		cursor: pointer;
		outline: none;
		border-radius: 6px;
		box-shadow: 0px 5px;
		transform: translateY(-0px);
		transition: 0.05s ease-in;
		user-select: none;
		background-color: transparent;
		height: 2rem;
	}
	button:hover {
		transform: translateY(-3px);
		box-shadow: 0px 8px;
		background-color: rgb(235, 235, 235);
	}
	button:active {
		transform: translateY(5px);
		box-shadow: 0px 0px;
		background-color: white;
	}
	.big {
		width: calc(100%);
		padding: 1rem;
		margin: 1rem 0 1rem 0;
		font-size: 1rem;
	}
	.green:hover {
		background-color: greenyellow;
	}
</style>
