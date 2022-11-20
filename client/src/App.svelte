<script>
	import Canvas from './lib/Canvas.svelte';
	import PlayerList from './lib/PlayerList.svelte';
	import Chat from './lib/Chat.svelte';
	import { user } from './lib/stores';

	let username;

	function setUser(value) {
		user.set(username);
	}
</script>

<div class="root">
	{#if $user}
		<PlayerList />
		<Canvas />
		<Chat />
	{:else}
		<form on:submit|preventDefault={setUser}>
			<input type="text" required bind:value={username} />
			<input type="submit" />
		</form>
	{/if}
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
