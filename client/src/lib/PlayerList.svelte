<script>
	let players = [];
</script>

<div class="player-list">
	<h3>Players</h3>
	<ul>
		{#each players as player}
			<li>
				<h4>{player.username}</h4>
			</li>
		{/each}
	</ul>
</div>

<style>
	.player-list {
		width: 200px;
	}
</style>
