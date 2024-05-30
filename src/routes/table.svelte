<script>
	import { createEventDispatcher } from 'svelte';
	import Row from './Row.svelte';
	import Sub from './sub.svelte';

	export let services;
	export let labels;
	export let tva;
	export let currencyToggle;
	export let exemptToggle;
	export let tvaToggle;
	$: currency = currencyToggle ? 'EUR' : 'CHF';

	$: tvaC = tva * !exemptToggle;
	export let totals = { t: 0, tva: 0, ttc: 0 };

	let dispatch = createEventDispatcher();

	$: sum = calcTotal(services, sum, tvaC, tvaToggle);
	function calcTotal(s, v, vat, toggle) {
		v = 0;
		s.forEach((e) => {
			v += e.price * e.amount;
		});
		if (!toggle) {
			totals = { t: v, tva: (v * vat) / 100, ttc: v + (v * vat) / 100 };
		} else {
			let dividend = (100 + vat) / 100;
			console.log(dividend);
			totals = { t: v / dividend, tva: ((v / dividend) * vat) / 100, ttc: v };
		}
		dispatch('newTotal');
		return v;
	}
</script>

<div id="table">
	<Row entry={labels.tableHeader} {labels} header="true"></Row>
	{#each services as entry}
		<div>
			<Row {currency} {entry} {labels}></Row>
		</div>
		{#each entry.sub as sub}
			<Sub
				on:remove={(event) => {
					entry.sub.splice(entry.sub.indexOf(event.detail.target), 1);
					entry.sub = entry.sub;
				}}
				text={sub}
			></Sub>
		{/each}
	{/each}
	<div id="totals">
		<Row
			{currency}
			entry={{
				title: '',
				sub: [],
				unit: '',
				amount: '',
				legend: 'Total ' + labels.HT,
				total: Math.floor(totals.t * 100) / 100
			}}
			{labels}
			total="true"
		></Row>
		<Row
			currency={exemptToggle ? '' : currency}
			entry={{
				title: '',
				sub: [],
				unit: '',
				amount: '',
				legend: labels.tva + ' ' + tvaC + '%',
				total: exemptToggle ? '- - -' : Math.floor(totals.tva * 100) / 100
			}}
			{labels}
			total="true"
		></Row>
		<Row
			{currency}
			entry={{
				title: '',
				sub: [],
				unit: '',
				amount: '',
				legend: 'Total',
				total: Math.floor(totals.ttc * 100) / 100
			}}
			{labels}
			total="true"
			black="true"
		></Row>
	</div>
</div>

<style>
	#table {
	}
	#totals {
		margin-top: 3%;
	}
</style>
