<script>
	export let entry;
	export let labels;
</script>

<div>
	<input type="text" bind:value={entry.title} />
	<select bind:value={entry.unit} name="cars" id="cars">
		<option value="0">{labels.units[0]}</option>
		<option value="1">{labels.units[1]}</option>
		<option value="2">{labels.units[2]}</option>
		<option value="3">-</option>
	</select>
	<input type="text" bind:value={entry.amount} />
	<input type="text" bind:value={entry.price} />
</div>

<style>
	div * {
	}
	input:first-child {
		border-radius: 6px 0px 0px 6px;
		border-width: 2px 2px 2px 2px;
	}
	input:last-child {
		margin: 0;
		border-radius: 0 6px 6px 0;
		border-width: 2px 2px 2px 0px;
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
	select {
		width: 100%;
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
</style>
