<script>
	import { sendChat, chat } from './stores';

	let message = '';
	let messages = [];

	chat.subscribe(value => {
		messages = value;
	});

	function onSubmit() {
		sendChat(message);
	}
</script>

<div class="chat">
	<h3>Chat</h3>
	<div class="messages">
		{#each messages as {user, message}}
			<div class="message">
				<h6>{user}</h6>
				<p>{message}</p>
			</div>
		{/each}
	</div>
	<form on:submit|preventDefault={onSubmit}>
		<input name="message" type="text" bind:value={message} />
		<input type="submit" />
	</form>
</div>

<style>
	.chat {
		width: 200px;
	}

	.messages {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.message {
		border: solid 1px #000;
		max-width: 75%;
	}
</style>
