<script>
	import { onMount } from 'svelte';

	let width = 800, height = 600;
</script>

<canvas {width} {height}></canvas>

<style>
	canvas {
		border: solid 1px #000;
	}
</style>
