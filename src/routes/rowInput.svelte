<script>
	import { createEventDispatcher } from 'svelte';
	export let entry;
	export let labels;
	import Button from './Button.svelte';
	import Input from './Input.svelte';

	const dispatch = createEventDispatcher();

	function addSub() {
		entry.sub.push('');
		entry.sub = entry.sub;
		console.log(entry);
	}
	function remove(event) {
		event.preventDefault();
		console.log('delete this');
		dispatch('remove', { target: entry });
	}
	function removeSub(event) {
		event.preventDefault();
		entry.sub.splice(entry.sub.indexOf(event.target.value), 1);
		entry.sub = entry.sub;
	}
</script>

<div on:contextmenu={remove}>
	<input type="text" bind:value={entry.title} />
	<select bind:value={entry.unit}>
		<option value="0">{labels.units[0]}</option>
		<option value="1">{labels.units[1]}</option>
		<option value="2">{labels.units[2]}</option>
		<option value="3">-</option>
	</select>
	<input id="quantity" type="number" bind:value={entry.amount} />
	<input class="last" type="number" bind:value={entry.price} />
	<Button label="✱" on:click={addSub}></Button>
</div>
{#each entry.sub as sub}
	<input bind:value={sub} on:contextmenu={removeSub} class="sub" type="text" />
{/each}

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
	input:first-child {
		border-radius: 6px 0px 0px 6px;
		border-width: 2px 2px 2px 2px;
		width: 200%;
	}
	input.last {
		margin: 0;
		border-radius: 0 6px 6px 0;
		border-width: 2px 2px 2px 0px;
		margin-right: 0.5rem;
	}
	input {
		width: 100%;
		text-align: end;
		box-sizing: border-box;
		border: 2px solid black;
		border-width: 2px 2px 2px 0px;
		outline: none;
		height: 2rem;
		padding: 0.5rem;
		font-size: 1rem;
		transition: 0.1s ease-in-out;
		box-shadow: 0px 0px;
	}
	#quantity {
		width: 50%;
	}
	select {
		width: 150%;
		text-align: end;
		box-sizing: border-box;
		border: 2px solid black;
		border-width: 2px 2px 2px 0px;

		outline: none;
		height: 2rem;
		padding: 0rem 0.5rem 0rem 0.5rem;
		font-size: 1rem;
		transition: 0.1s ease-in-out;
		box-shadow: 0px 0px;
		background-color: white;
		cursor: pointer;
	}

	option {
		box-sizing: border-box;
		border: 2px solid black;
		background-color: rgb(235, 235, 235);
	}

	input:focus {
		transform: translateY(-5px);
		box-shadow: 0px 5px;
		background-color: rgb(235, 235, 235);
		border-width: 2px 2px 2px 2px;
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-top: 1rem;
	}
	::-moz-selection {
		/* Code for Firefox */
		color: white;
		background: black;
	}

	::selection {
		color: white;
		background: black;
	}
	input.sub {
		border-width: 0 0 2px 0;
		width: 70%;
		text-align: left;
	}
</style>
