<script>
	import Toggle from './Toggle.svelte';
	import Button from './Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import { getEmojiFlag } from 'countries-list';

	const dispatch = createEventDispatcher();

	export let btnText = 'Button';
	export let label = 'Label';
	export let value = 'write something here';
	export let type = 'text';
	export let options = [];
	export let flipped;
	export let toggleValues = { off: 'OFF', on: 'ON' };

	function click() {
		dispatch('click');
	}
</script>

<div>
	<label for="field">{label} </label>
	{#if type == 'options'}
		<select bind:value name="field">
			{#each options as entry}
				<option value={entry[0]}> {entry[1]} {getEmojiFlag(entry[0])}</option>
			{/each}
		</select>
	{:else if type == 'text'}
		<input bind:value type="text" name="field" />
	{:else if type == 'number'}
		<input bind:value type="number" name="field" />
	{:else if type == 'iban'}
		<input
			type="text"
			inputmode="numeric"
			pattern="[0-9\s]{(13, 19)}"
			autocomplete="cc-number"
			maxlength="19"
			placeholder="xxxx xxxx xxxx xxxx"
			name="field"
			bind:value
		/>
	{:else if type == 'toggle'}
		<Toggle values={toggleValues} bind:flipped></Toggle>
	{:else if type == 'button'}
		<Button label={btnText} on:click={click}></Button>
	{/if}
</div>

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
	label {
		margin-right: 1rem;
		font-size: 1rem;
		text-transform: uppercase;
	}
	input,
	select {
		width: 60%;
		text-align: end;
		box-sizing: border-box;
		border: 2px solid black;
		outline: none;
		height: 2rem;
		padding: 0.5rem;
		border-radius: 6px;
		font-size: 1rem;
		transition: 0.1s ease-in-out;
		box-shadow: 0px 0px;
	}

	input:focus {
		transform: translateY(-5px);
		box-shadow: 0px 5px;
		background-color: rgb(235, 235, 235);
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0.8rem;
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
	select {
		text-align: end;
		box-sizing: border-box;
		border: 2px solid black;

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
</style>
