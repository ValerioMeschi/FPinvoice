<script>
	export let entry;
	export let labels;
	export let header = false;
	export let total = false;
	export let black = false;
	export let currency = 'CHF';
</script>

<div id="row" class:header class:black>
	<div>{entry.title}</div>
	{#if header}
		<div>{entry.unit}</div>
	{:else if total}
		<div></div>
	{:else}
		<div>{labels.units[entry.unit]}</div>
	{/if}

	<div>{entry.amount}</div>
	<div class:total>
		{#if header}
			{entry.price}
		{:else if total}
			{entry.legend}
		{:else}
			{currency} {entry.price}
		{/if}
	</div>
	<div class:total>
		{#if header}
			{entry.total}
		{:else if total}
			{currency} {entry.total}
		{:else}
			{#if !header}
				{currency}
			{/if}
			{Math.floor(entry.price * entry.amount * 100) / 100}
		{/if}
	</div>
</div>

<style>
	#row {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 1%;
	}
	#row div {
		display: inline-block;
		text-align: left;
		width: 80%;
	}
	#row div:first-child {
		width: 200%;
	}
	#row div:last-child {
		text-align: right;
		direction: rtl;
	}

	#row.header {
		color: rgb(170, 170, 170);
		margin-bottom: 2%;
		font-weight: 700;
	}
	#row.header div {
		padding: 0;
	}
	.total {
		color: rgb(125, 125, 125);
	}
	#row.black .total {
		text-indent: 5%;
		padding: 0.2% 0;
		background-color: black;
		color: white;
	}
</style>
