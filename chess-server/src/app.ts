import { Server, Socket } from 'socket.io';

import { createServer } from 'http';

const httpServer = createServer();

const server = new Server(httpServer, {
	cors: {
		origin: '*'
	}
});

const onConnection = (socket: Socket): void => {
	socket.on('send-message', (message: string, roomId: string) => {
		socket.to(roomId).emit('receive-Message', message);
		console.log(message);
	});
	socket.on('join-room', (roomId: string) => {
		socket.join(roomId);
		// socket.emit('receive-Message', `joined the room ${roomId}`);
		const data = { roomId };

		socket.emit('join-response', { data, error: false });
	});
};

server.on('connection', onConnection);

httpServer.listen(4000);
