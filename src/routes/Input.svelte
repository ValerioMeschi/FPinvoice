<script>
	export let label = 'Label';
	export let value = 'write something here';
</script>

<div>
	<label for="field">{label} </label>
	<input bind:value type="text" name="field" />
</div>

<style>
	label {
		margin-right: 1rem;
		font-size: 1rem;
		text-transform: uppercase;
	}
	input {
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
</style>
