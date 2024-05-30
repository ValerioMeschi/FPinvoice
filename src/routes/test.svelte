<script>
	let content = {
		caca: 'fuck'
	};
	let pute = {
		caca: 'bitch'
	};
	function changeobject() {
		content = { ...pute };
	}
</script>

<h1>{content.caca}</h1>

<button on:click={changeobject}> </button>
