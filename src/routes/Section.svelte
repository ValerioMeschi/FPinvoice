<script>
	export let title = 'Title';
	let closed = false;
	function toggle() {
		closed = !closed;
	}
</script>

<h2 on:click={toggle}>
	{#if closed}✧{:else}
		✦
	{/if}
	{title.toUpperCase()}
</h2>

<div class="accordion-content" class:closed>
	<div>
		<slot></slot>
	</div>
</div>

<style>
	.accordion-content {
		display: grid;
		grid-template-rows: 1fr;
		transition: grid-template-rows 0.3s;
	}
	.accordion-content div {
		transition: padding 0.3s;
		overflow: hidden;
		padding: 0.5rem 0.5rem 0.5rem 0.5rem;
	}
	.accordion-content.closed {
		grid-template-rows: 0fr;
	}
	.accordion-content.closed div {
		padding: 0rem;
	}
	h2 {
		margin-top: 0;
		margin-bottom: 1rem;
		cursor: pointer;
		user-select: none;
		scale: 1;
		transition: 0.1s ease-in-out;
		text-wrap: nowrap;
		width: 0%;
	}
	h2:hover {
		scale: 1.1;
	}
	.closed {
		transition: 0.4s ease-in-out;
		grid-template-rows: 1fr;
	}
</style>
