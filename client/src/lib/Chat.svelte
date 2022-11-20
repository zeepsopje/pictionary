<script>
	let messages = [];
</script>

<div class="chat">
	<h3>Chat</h3>
	<div class="messages">
		{#each messages as {username, message}}
			<div class="message">
				<h6>{username}</h6>
				<p>{message}</p>
			</div>
		{/each}
	</div>
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
