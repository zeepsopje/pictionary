import { get, writable } from 'svelte/store';
import { ChatMessage } from './data-types';
import ws from './ws';

export const user = writable(localStorage.username || null);
export const chat = writable([]);

user.subscribe(value => {
	if (value) localStorage.username = value;
});

ws.socket.addEventListener('message', (payload) => {
	const { type, data } = JSON.parse(payload.data);

	switch (type) {
		case 'chat':
			chat.update(curr => [...curr, data]);
	}
});

export function sendChat(message) {
	ws.send(new ChatMessage(get(user), message));
}
