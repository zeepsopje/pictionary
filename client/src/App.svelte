<script>
	import Canvas from './lib/Canvas.svelte';
	import PlayerList from './lib/PlayerList.svelte';
	import Chat from './lib/Chat.svelte';
</script>

<div class="root">
	<PlayerList />
	<Canvas />
	<Chat />
</div>

<style>
	.root {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		gap: 20px;
	}
</style>
