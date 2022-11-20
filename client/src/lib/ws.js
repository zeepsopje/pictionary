const ws = {};

ws.socket = new WebSocket('ws://localhost:3000');

ws.send = function(data) {
	ws.socket.send(JSON.stringify(data));
};

export default ws;
