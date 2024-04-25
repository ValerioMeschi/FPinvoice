<script>
	export let services;
	export let labels;
	import Row from './Row.svelte';
	import Sub from './sub.svelte';
	$: sum = calcTotal(services, sum);
	function calcTotal(s, v) {
		v = 0;
		s.forEach((e) => {
			v += e.price * e.amount;
		});
		return v;
	}
</script>

<div id="table">
	<Row entry={labels.tableHeader} {labels} header="true"></Row>
	{#each services as entry}
		<div>
			<Row {entry} {labels}></Row>
		</div>
		{#each entry.sub as sub}
			<Sub text={sub}></Sub>
		{/each}
	{/each}
</div>

<style>
	#table {
		margin-top: 5rem;
	}
</style>
