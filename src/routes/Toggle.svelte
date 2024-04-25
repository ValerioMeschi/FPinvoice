<script>
	export let flipped = false;
	function sw() {
		flipped = !flipped;
	}
	export let values = { off: 'EN', on: 'FR' };
</script>

<div id="track" class:flipped on:click={sw}>
	<div id="thumb" class:flipped>{flipped ? values.on : values.off}</div>
</div>

<style>
	#track {
		box-sizing: content-box;
		height: 2rem;
		width: 4rem;
		outline: 2px solid black;
		outline-offset: 0px;
		border-radius: 6px;
		cursor: pointer;
		background-color: white;
		transform: translateY(10px);
		margin-bottom: calc(3px + 0.5rem);
	}
	#thumb {
		box-sizing: content-box;
		height: calc(2rem - 0px);
		width: calc(2rem - 0px);
		background-color: white;
		transition: 0.05s ease-in-out;
		border: 2px solid black;
		border-radius: 6px;
		box-shadow: 0px 5px;
		transform: translate(calc(-2px), -7px);
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
	}
	#thumb.flipped {
		transform: translate(calc(-2px + 2rem), -7px);
	}
	#track:hover #thumb {
		box-shadow: 0px 7px;
		transform: translate(calc(-2px), -10px);
		background-color: rgb(235, 235, 235);
	}
	#track:hover #thumb.flipped {
		transform: translate(calc(-2px + 2rem), -10px);
	}
	#track.flipped {
	}
</style>
