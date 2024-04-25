<script>
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import Button from './Button.svelte';
	import Toggle from './Toggle.svelte';
	import Section from './Section.svelte';
	import Input from './Input.svelte';
	import RowInput from './rowInput.svelte';
	import Row from './Row.svelte';

	import Logo from './logo.svelte';
	import { defaults } from './data.js';

	let langToggle;
	$: labels = langToggle ? defaults.labelsFR : defaults.labelsEN;
	let store = defaults;
	let projectName = '';
	const date = new Date();
	let year = date.getFullYear().toString();
	let formatDate = `${pad(date.getDate(), 2)}.${pad(date.getMonth() + 1, 2)}.${year.slice(2)}`;
	let pw = 0;
	$: invoiceID = `I-${store.project.name.slice(0, 3).toLocaleUpperCase()}${pad(store.project.number, 2)}${year.slice(2)}`;

	function pad(num, size) {
		num = num.toString();
		while (num.length < size) num = '0' + num;
		return num;
	}

	function addEntry() {
		store.services.push({
			title: 'Production',
			unit: '2',
			amount: 1,
			price: 3000
		});
		store.services = store.services;
	}

	async function generatePDF() {
		pw = '100vw';
		await tick();
		let markup = document.querySelector('#invoice').innerHTML;
		let s = '';
		for (const sheet of document.styleSheets) {
			if (sheet != undefined && sheet.href == null) {
				for (const rule of sheet.cssRules) {
					if (rule != undefined) {
						s += rule.cssText;
					}
				}
			}
		}

		let data = {
			mkp: markup,
			style: s
		};
		const reqOptions = {
			method: 'POST',
			body: JSON.stringify(data)
		};
		const request = new Request('/scrape', reqOptions);
		const response = await fetch(request);
		if (response.status == 200) {
			let content = await response.blob();
			console.log('Generating PDF ✍🏻');
			var link = window.URL.createObjectURL(content);
			var a = document.createElement('a');
			a.setAttribute('download', 'caca.pdf');
			a.setAttribute('href', link);
			document.body.appendChild(a);
			console.log('Donwloading 💾');
			a.click();
			document.body.removeChild(a);
			calulateWidth();
		} else {
			throw new Error('Something went wrong on the server! 😱');
		}
	}

	function calulateWidth() {
		pw = document.querySelector('#invoice').offsetWidth + 'px';
	}
	onMount(() => {
		calulateWidth();
		window.addEventListener('resize', calulateWidth);
	});
</script>

<div id="container">
	<div id="formArea">
		<div id="form">
			<Section title="Sender"></Section>
			<Input bind:value={store.sender.name} label="name"></Input>
			{#each store.sender.address as entry}
				<Input bind:value={entry.value} label={entry.label}></Input>
			{/each}
			<br />
			<Section title="Receiver"></Section>
			<Input bind:value={store.receiver.name} label="name"></Input>
			{#each store.receiver.address as entry}
				<Input bind:value={entry.value} label={entry.label}></Input>
			{/each}
			<Section title="Project"></Section>
			<Input bind:value={store.project.name} label="Name"></Input>
			<Input bind:value={store.project.number} label="Invoice N°"></Input>
			<Section title="Services"></Section>
			{#each store.services as entry}
				<RowInput bind:entry {labels}></RowInput>
			{/each}
			<Button label="+" on:click={addEntry}></Button>
			<Button label="download" on:click={generatePDF} />
			<Toggle bind:flipped={langToggle}></Toggle>
		</div>
	</div>

	<div id="previewArea">
		<div id="invoice">
			<div id="page" style="--page-width:{pw}">
				<div id="header">
					<div id="sender">
						<div id="logo"><Logo></Logo></div>
						{#each store.sender.address as entry}
							<p>{entry.value}</p>
						{/each}
					</div>
					<div id="receiver">
						<h3>{labels.invoice}</h3>
						<p>{invoiceID}</p>
						<p>{formatDate}</p>
						<h3>{store.receiver.name}</h3>
						{#each store.receiver.address as entry}
							<p>{entry.value}</p>
						{/each}
					</div>
				</div>
				<div id="body">
					<div>
						<div id="table">
							{#each store.services as entry}
								<Row {entry} {labels}></Row>
							{/each}
						</div>
					</div>
				</div>
				<div id="footer"></div>
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

	:global(body) {
		padding: 0;
		margin: 0;
	}
	#container * {
		font-family: 'IBM Plex Sans', sans-serif;
	}
	#container {
		box-sizing: border-box;
		background-color: white;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	#invoice * {
		font-weight: 400;
		font-style: normal;
		font-weight: 400;
		font-style: normal;
	}
	#container > div {
		box-sizing: border-box;
		overflow-y: scroll;
		padding: 3rem;
	}
	#formArea {
		width: 40vw;
		padding-right: 0 !important;
	}
	#container > div::-webkit-scrollbar {
		display: none;
	}
	#previewArea {
		box-sizing: border-box;
		width: 60vw;
		max-width: 950px;
	}
	#invoice {
		box-sizing: border-box;
		background-color: white !important;
		box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
	}
	#page {
		user-select: none;
		box-sizing: border-box;
		width: 100%;
		height: calc(var(--page-width) * 1.41);
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: space-between;
		font-size: 100%;
		--font-small: calc(var(--page-width) * 0.018);
		--font-medium: calc(var(--page-width) * 0.025);
		--font-big: calc(var(--page-width) * 0.035);
		padding: calc(var(--page-width) * 0.05);
		font-family: 'IBM Plex Sans', sans-serif;
	}

	#page p {
		padding: 0;
		margin: 0;
		font-size: var(--font-small);
	}

	#page h3 {
		padding: 0;
		margin: 0;
		margin-top: calc(var(--page-width) * 0.025);
		margin-bottom: calc(var(--page-width) * 0.008);
		font-size: var(--font-medium);
		font-weight: 800;
	}
	#page h3:first-child {
		margin-top: 0;
	}

	#header {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	#logo {
		width: calc(var(--page-width) * 0.25);
	}

	#receiver {
		text-align: end;
	}
	#body {
		height: 100%;
		width: 100%;
	}

	#footer {
		min-height: calc(var(--page-width) * 0.3);
		width: 100%;
	}
</style>
