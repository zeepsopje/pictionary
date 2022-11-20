import http from 'http';
import initWebSocketServer from './ws';

const server = http.createServer();
const wss = initWebSocketServer(server);

server.listen(3000, () => {
	console.log('Server ready on :3000');
});
