<script>
	export let entry;
	export let labels;
</script>

<div id="table">
	<div>{entry.title}</div>
	<div>{labels.units[entry.unit]}</div>
	<div>{entry.amount}</div>
	<div>{entry.price}.-</div>
	<div>{entry.price * entry.amount}.-</div>
</div>

<style>
	#table {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	#table div {
		text-align: left;
		width: 100%;
	}
	#table div:first-child {
		flex-grow: 0.2;
		width: 180%;
	}
	#table div:last-child {
		text-align: right;
	}
</style>
