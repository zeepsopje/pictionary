import { WebSocketServer } from 'ws';

function Chat(user, message) {
	this.type = 'chat';
	this.data = { user, message };
}

function broadcast(wss, message) {
	wss.clients.forEach(client => {
		client.send(JSON.stringify(message));
	});
}

function initWebSocketServer(httpServer) {
	const wss = new WebSocketServer({ noServer: true });

	wss.on('connection', (ws) => {
		ws.on('message', (payload) => {
			const { type, data } = JSON.parse(payload);
			switch (type) {
				case 'chat':
					broadcast(wss, new Chat(data.user, data.message));
			}
		});
	});

	httpServer.on('upgrade', (req, socket, head) => {
		wss.handleUpgrade(req, socket, head, (ws) => {
			wss.emit('connection', ws, req);
		});
	});
}

export default initWebSocketServer;
