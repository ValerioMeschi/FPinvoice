<script>
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import QRCode from 'qrcode';
	import { countries } from 'countries-list';
	import { getCountryData, getEmojiFlag } from 'countries-list';
	import { browser } from '$app/environment';
	import Button from './Button.svelte';
	import Toggle from './Toggle.svelte';
	import Section from './Section.svelte';
	import Input from './Input.svelte';
	import RowInput from './rowInput.svelte';
	import Table from './table.svelte';
	console.log(getCountryData('CH'));

	import Logo from './logo.svelte';
	import { defaults } from './data.js';

	let countriesData = Array.from(Object.entries(countries));
	let countriesList = countriesData.map((entry) => [entry[0], entry[1].name]);
	let totals = {};
	let store = structuredClone(defaults);

	let sfx;
	if (browser) {
		sfx = new Audio('/sfx/catching.mp3');
		sfx.volume = 0.5;
		sfx.pause();
		if (!localStorage.getItem('default')) {
			localStorage.setItem('default', JSON.stringify(store));
			console.log(localStorage);
		} else {
			store = JSON.parse(localStorage.getItem('default'));
		}
	}

	$: currency = store.currencyToggle ? 'EUR' : 'CHF';
	$: labels = store.langToggle ? store.labelsFR : store.labelsEN;
	const date = new Date();
	let year = date.getFullYear().toString();
	let formatDate = `${pad(date.getDate(), 2)}.${pad(date.getMonth() + 1, 2)}.${year.slice(2)}`;
	let pw = 0;

	$: invoiceID = `I-${store.project.name.slice(0, 3).toLocaleUpperCase()}${pad(store.project.number, 2)}${year.slice(2)}`;
	let qr = '';

	$: qrString = `SPC\n0200\n1\n${store.sender.iban}\nS\n${store.sender.name}\n${store.sender.address.street}\n${store.sender.address.number}\n${store.sender.address.code}\n${store.sender.address.region}\n${store.sender.address.country}\n\n\n\n\n\n\n\n${totals.ttc}\n${currency}\nS\n${store.receiver.name}\n\n\n${store.receiver.address.code}\n${store.receiver.address.region}\n${store.receiver.address.country}\nSCOR\n\n${invoiceID}\nEPD`;
	$: generateQR(qrString).then((url) => (qr = url));

	function pad(num, size) {
		num = num.toString();
		while (num.length < size) num = '0' + num;
		return num;
	}

	function resetDefaults() {
		if (browser) {
			store = JSON.parse(localStorage.getItem('default'));
		}
	}
	function saveDefaults() {
		if (browser) {
			localStorage.setItem('default', JSON.stringify(store));
			store = JSON.parse(localStorage.getItem('default'));
		}
	}
	function clearDefaults() {
		localStorage.setItem('default', JSON.stringify(defaults));
		store = JSON.parse(localStorage.getItem('default'));
	}

	function addEntry() {
		store.services.push({
			title: 'Production',
			unit: '2',
			sub: [],
			amount: 1,
			price: 3000
		});
		store.services = store.services;
	}

	function deleteEntry(event) {
		store.services.splice(store.services.indexOf(event.detail.target), 1);
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
			a.setAttribute('download', `[INVOICE]-${invoiceID}.pdf`);
			a.setAttribute('href', link);
			document.body.appendChild(a);
			console.log('Donwloading 💾');
			sfx.currentTime = 0;
			sfx.play();
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
		//afterDomload
		calulateWidth();
		window.addEventListener('resize', calulateWidth);
	});

	async function setNewTotal() {
		//let text = `SPC\n0200\n1\n${store.data.iban}\nS\nFloating Point Studio Sàrl\nRue de la Paix\n18\n1020\nRenens VD\nCH\n\n\n\n\n\n\n\n12345.00\nCHF\nS\nJerôme\n\n\n1209\nGenève\nCH\nSCOR\nRF34JL02\n\nEPD`;
		//qr = await generateQR(text);
	}

	async function generateQR(text) {
		var opts = {
			margin: 5,
			color: {
				dark: '#000000',
				light: '#ffffff00'
			}
		};
		return await QRCode.toDataURL(text, opts);
	}
</script>

<div id="container">
	<div id="previewArea">
		<div id="invoice">
			<div id="page" style="--page-width:{pw}">
				<div id="header">
					<div id="sender">
						{#if store.logo}
							<div id="logo"><Logo></Logo></div>
							<p>{store.sender.name}</p>
						{:else}
							<h3>{store.sender.name}</h3>
						{/if}

						<p>{store.sender.address.street} {store.sender.address.number}</p>
						<p>{store.sender.address.code} {store.sender.address.region}</p>
						<p>
							{getCountryData(store.sender.address.country).name}
							{store.sender.address.country}
						</p>
						<p>{store.sender.address.mail}</p>
						<p>{store.sender.address.website}</p>
					</div>
					<div id="receiver">
						<h3>{labels.invoice}</h3>
						<p>{invoiceID}</p>
						<p>{formatDate}</p>
						<h3>{store.receiver.name}</h3>
						<p>{store.receiver.address.street} {store.receiver.address.number}</p>
						<p>{store.receiver.address.code} {store.receiver.address.region}</p>
						<p>
							{getCountryData(store.receiver.address.country).name}
							{store.receiver.address.country}
						</p>
					</div>
				</div>
				<div id="body">
					<div>
						<div id="table">
							<Table
								on:newTotal={setNewTotal}
								currencyToggle={store.currencyToggle}
								exemptToggle={store.exemptToggle}
								tvaToggle={store.tvaToggle}
								tva={store.rate}
								bind:totals
								services={store.services}
								{labels}
							></Table>
						</div>
					</div>
				</div>
				<div id="footer">
					<div id="info">
						<h3>{labels.account.toUpperCase()}</h3>
						<p>{store.sender.name}</p>
						<p>{store.sender.address.street} {store.sender.address.number}</p>
						<p>{store.sender.address.code} {store.sender.address.region}</p>
						<p>{getCountryData(store.receiver.address.country).name}</p>
						<h3>IBAN</h3>
						<p>{store.sender.iban}</p>
						<div class="split">
							<div>
								<h3>{labels.currency.toUpperCase()}</h3>
								<p>{currency}</p>
							</div>
							<div>
								<h3>{labels.amount.toUpperCase()}</h3>
								pute
								<p>{totals.ttc}</p>
							</div>
						</div>
					</div>
					<div id="qr">
						<img src={qr} alt="" />
					</div>
					<div id="contact">
						<h3>{labels.tva} N°</h3>
						<p>{store.vatno}</p>

						<h3>REFERENCE</h3>
						<p>{invoiceID}</p>
						<h3>CONTACT</h3>
						<p>{store.sender.address.mail}</p>
						<div class="split">
							<div>
								<h3>{labels.currency.toUpperCase()}</h3>
								<p>{currency}</p>
							</div>
							<div>
								<h3>{labels.amount.toUpperCase()}</h3>
								<p>{totals.ttc}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="formArea">
		<div id="form">
			<Section title="Sender">
				<Input bind:value={store.sender.name} label="name"></Input>
				<Input bind:value={store.sender.address.street} label="street"></Input>
				<Input type="number" bind:value={store.sender.address.number} label="N°"></Input>
				<Input type="number" bind:value={store.sender.address.code} label="Code"></Input>
				<Input bind:value={store.sender.address.region} label="Region"></Input>
				<Input
					type="options"
					options={countriesList}
					bind:value={store.sender.address.country}
					label="Country"
				></Input>
				<Input bind:value={store.sender.address.mail} label="mail"></Input>
				<Input bind:value={store.sender.address.website} label="website"></Input>

				<br />
			</Section>
			<Section title="Receiver">
				<Input bind:value={store.receiver.name} label="name"></Input>
				<Input bind:value={store.receiver.address.street} label="street"></Input>
				<Input type="number" bind:value={store.receiver.address.number} label="N°"></Input>
				<Input type="number" bind:value={store.receiver.address.code} label="Code"></Input>
				<Input bind:value={store.receiver.address.region} label="Region"></Input>
				<Input
					type="options"
					options={countriesList}
					bind:value={store.receiver.address.country}
					label="Country"
				></Input>
			</Section>
			<Section title="Project">
				<Input bind:value={store.project.name} label="Name"></Input>
				<Input bind:value={store.project.number} label="Invoice N°"></Input>
				<Input bind:value={store.project.contact} label="Contact"></Input>
			</Section>
			<Section title="Services">
				<Button type="big" label="+ row  (•◡•) /" on:click={addEntry}></Button>
				{#each store.services as entry}
					<RowInput on:remove={deleteEntry} bind:entry {labels}></RowInput>
				{/each}
			</Section>
			<Section title="Payment">
				<Input type="iban" bind:value={store.sender.iban} label="IBAN"></Input>

				<Input
					bind:flipped={store.currencyToggle}
					type="toggle"
					label="Currency"
					toggleValues={{ on: 'EUR', off: 'CHF' }}
				></Input>
				<Input
					bind:flipped={store.exemptToggle}
					type="toggle"
					label="VAT exempt"
					toggleValues={{ on: 'ON', off: 'OFF' }}
				></Input>
				<Input
					bind:flipped={store.tvaToggle}
					type="toggle"
					label="VAT incl."
					toggleValues={{ on: 'ON', off: 'OFF' }}
				></Input>
				<Input bind:value={store.rate} type="number" label="VAT %"></Input>
				<Input bind:value={store.vatno} type="text" label="VAT N°"></Input>
			</Section>
			<Section title="Controls">
				<div id="controls">
					<div>
						<Input
							bind:flipped={store.langToggle}
							type="toggle"
							label="Language"
							toggleValues={{ on: 'FR', off: 'EN' }}
						></Input>
						<Input bind:flipped={store.logo} type="toggle" label="Logo"></Input>
					</div>

					<Input on:click={saveDefaults} type="button" label="save defaults" btnText="SAVE"></Input>
					<Input on:click={resetDefaults} type="button" label="reset defaults" btnText="RESET"
					></Input>
					<Input on:click={clearDefaults} type="button" label="clear defaults" btnText="CLEAR"
					></Input>
				</div>
			</Section>
			<div id="save">
				<Button col="green" type="big" label="★SAVE★" on:click={generatePDF} />
				<Button col="green" type="big" label=" ★LOAD★" on:click={generatePDF} />
			</div>
			<Button col="green" type="big" label="✱ download ⸜(രᴗര๑)⸝ ✱" on:click={generatePDF} />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Nanum+Gothic+Coding:wght@400;700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Space+Mono:wght@400;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
	:global(body) {
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(250, 250, 250);
	}

	:global(:root) {
		--font: 'IBM Plex Mono', monospace;
		font-family: var(--font);
	}
	#container * {
		font-family: var(--font);
	}
	#container {
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		max-width: 1500px;
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
		font-family: var(--font);
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
		font-size: var(--font-small);
		min-height: 30%;
		max-height: 60%;
		overflow: hidden;
		width: 100%;
	}

	#footer {
		min-height: calc(var(--page-width) * 0.32);
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: var(--font-small);
	}
	#footer div {
	}
	#footer h3 {
		font-size: var(--font-small);
		color: rgb(170, 170, 170);
	}

	#footer #qr {
		width: calc(100% / 3);
	}
	#qr img {
		width: calc(100%);
	}
	#footer .split {
		display: flex;
		margin-top: calc(var(--page-width) * 0.025);
		width: 100%;
	}
	#footer .split div {
		width: 100%;
	}
	#footer #contact {
		display: flex;
		flex-direction: column;
		width: calc(100% / 3);
		padding-left: 2%;
	}
	#footer #info {
		display: flex;
		flex-direction: column;
		width: calc(100% / 3);
		padding-right: 2%;
	}

	#save {
		display: flex;
		justify-content: space-between;
		width: 100%;
		gap: 1rem;
	}
</style>
