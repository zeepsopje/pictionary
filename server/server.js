import http from 'http';
import { WebSocketServer } from 'ws';

const server = http.createServer();
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', (ws) => {
	console.log('connected');

	ws.on('message', (data) => {
		console.log(`Receiving data: ${data}`)
	});
});

server.on('upgrade', (req, socket, head) => {
	wss.handleUpgrade(req, socket, head, (ws) => {
		wss.emit('connection', ws, request);
	});
});

server.listen(3000, () => {
	console.log('Server ready on :3000');
});
