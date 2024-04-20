<script>
	let count = 1;
	$: double = count * 2;

	function increment() {
		count++;
	}
	function doSomething() {
		console.log(double);
	}
</script>

{count} * 2 = {double}
<button on:click={increment}>incrementme</button>
<button on:click={doSomething}>clickme</button>
