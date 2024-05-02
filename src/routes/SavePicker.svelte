<script>
	import SaveFile from './SaveFile.svelte';
	import { browser } from '$app/environment';
	import { tick } from 'svelte';

	export let savefiles = [];
	let open = false;
	export let store;
	export async function toggle() {
		await tick();
		savefiles = savefiles;
		open = !open;
		console.log(savefiles);
	}
	function deleteFile(event) {
		let f = event.detail.file;
		savefiles.splice(savefiles.indexOf(f), 1);
		if (browser) {
			savefiles = savefiles;
			localStorage.setItem('save', JSON.stringify(savefiles));
		}
	}
	function loadFile(event) {
		store = structuredClone(event.detail.file);
		toggle();
	}
</script>

<div class:open id="background" on:click={toggle}>
	<div class:open id="board">
		<div id="saveContainer">
			{#each savefiles as file}
				<SaveFile on:click={loadFile} on:delete={deleteFile} {file}></SaveFile>
			{/each}
		</div>
	</div>
</div>

<style>
	#background {
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
		pointer-events: none;
		transition-delay: 0.2s;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
	}

	#background.open {
		pointer-events: all;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 1;
	}

	#board {
		box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.4);

		box-sizing: border-box;
		width: 80%;
		height: 60%;
		max-width: 1200px;
		max-height: 600px;
		background-color: white;
		border-radius: 6px;
		transform: translateY(-100vh);
		transition: 0.3s ease-in-out;
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	#board::-webkit-scrollbar {
		display: none;
	}

	#board #saveContainer {
		padding: 3rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;
	}
	#saveContainer::after {
		content: '';
		flex: auto;
	}

	#board.open {
		transition-delay: 0.2s;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
		transform: translateY(0vh);
	}
</style>
