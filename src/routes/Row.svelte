<script>
	export let entry;
	export let labels;
	export let header = false;
</script>

<div id="row" class:header>
	<div>{entry.title}</div>
	{#if header}
		<div>{entry.unit}</div>
	{:else}
		<div>{labels.units[entry.unit]}</div>
	{/if}

	<div>{entry.amount}</div>
	<div>
		{#if !header}
			CHF
		{/if}
		{entry.price}
	</div>
	{#if header}
		<div>{entry.total}</div>
	{:else}
		<div>
			{#if !header}
				CHF
			{/if}
			{entry.price * entry.amount}
		</div>
	{/if}
</div>

<style>
	#row {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 0.5rem;
	}
	#row div {
		text-align: left;
		width: 100%;
	}
	#row div:first-child {
		flex-grow: 0.2;
		width: 180%;
	}
	#row div:last-child {
		text-align: right;
	}
	#row.header {
		color: rgb(170, 170, 170);
		margin-bottom: 1.5rem;
		font-weight: 700;
	}
</style>
