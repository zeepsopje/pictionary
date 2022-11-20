export function ChatMessage(user, message) {
	this.type = 'chat';
	this.data = { user, message };
}
