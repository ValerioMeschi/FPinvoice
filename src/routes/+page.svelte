<script>
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import Logo from './logo.svelte';
	let sender = {
		address: 'Rue de la Paix 18'
	};
	function getStyleSheet() {}
	let pw = 0;
	function calulateWidth() {
		pw = document.querySelector('#invoice').offsetWidth + 'px';
	}
	onMount(() => {
		calulateWidth();
		window.addEventListener('resize', calulateWidth);
	});
	async function generatePDF() {
		pw = '100vw';
		await tick();
		let markup = document.querySelector('#invoice').innerHTML;
		console.log(markup);
		let s = '';
		for (const sheet of document.styleSheets) {
			console.log(sheet);
			if (sheet != undefined && sheet.href == null) {
				for (const rule of sheet.cssRules) {
					if (rule != undefined) {
						s += rule.cssText;
					}
				}
			}
		}
		console.log(s);

		let data = {
			mkp: markup,
			style: s
		};
		const reqOptions = {
			method: 'POST',
			body: JSON.stringify(data)
		};
		const url = new URL('http://localhost:3000');
		const request = new Request(url, reqOptions);
		console.log(request);
		fetch(request)
			.then((response) => {
				if (response.status === 200) {
					return response.blob();
				} else {
					throw new Error('Something went wrong on API server!');
				}
			})
			.then((response) => {
				var link = window.URL.createObjectURL(response);
				var a = document.createElement('a');
				a.setAttribute('download', 'caca.pdf');
				a.setAttribute('href', link);
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			});
		calulateWidth();
	}
</script>

<div id="container">
	<div id="formArea">
		<div id="form">
			<input type="text" bind:value={sender.address} />
			<button on:click={generatePDF}>EXPORT</button>
		</div>
	</div>

	<div id="previewArea">
		<div id="invoice">
			<div id="page" style="--page-width:{pw}">
				<div id="header">
					<div id="sender">
						<div id="logo"><Logo></Logo></div>
						<p>{sender.address}</p>
						<p>1020 Renens</p>
						<p>Switzerland</p>
						<p>contact@floatingpoint.ch</p>
						<p>www.floatingpoint.ch</p>
					</div>
					<div id="receiver">
						<p>Rue de la paix 18</p>
						<p>1020 Renens</p>
						<p>Switzerland</p>
						<p>contact@floatingpoint.ch</p>
						<p>www.floatingpoint.ch</p>
					</div>
				</div>
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
	#container {
		box-sizing: border-box;
		background-color: white;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: row;
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
		scrollbar-width: 1rem;
		padding: 3rem;
	}
	#formArea {
		width: 40vw;
	}
	#formArea::-webkit-scrollbar {
		display: none;
	}
	#previewArea {
		width: 60vw;
	}
	#invoice {
		box-sizing: border-box;
		background-color: white !important;
		box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
		border-radius: 10px;
	}
	#page {
		box-sizing: border-box;
		width: 100%;
		height: calc(var(--page-width) * 1.41);
		display: flex;
		flex-direction: column;
		font-size: 100%;
		--font-small: calc(var(--page-width) * 0.018);
		--font-medium: calc(var(--page-width) * 0.02);
		--font-big: calc(var(--page-width) * 0.035);
		padding: calc(var(--page-width) * 0.05);
		font-family: 'IBM Plex Sans', sans-serif;
	}
	#header {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	#sender {
	}
	#logo {
		width: calc(var(--page-width) * 0.4);
	}
	#header * {
		padding: 0;
		margin: 0;
		font-size: var(--font-small);
	}
	#receiver {
		text-align: end;
	}
</style>
