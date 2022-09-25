import { Server, Socket } from 'socket.io';

import { createServer } from 'http';

const httpServer = createServer();

const server = new Server(httpServer, {
	cors: {
		origin: '*'
	}
});

const onConnection = (socket: Socket): void => {
	
	socket.on('send-message',(data)=>{
		socket.broadcast.to(data.id).emit('receive-message',data.message);
		// console.log(`room id is ${data.id}`);
		// console.log(`message is  ${data.message}`);
	})
	
	socket.on('join-room', (roomId: string) => {
		socket.join(roomId);
		const data = { roomId };
		socket.emit('join-response', { data, error: false });
	});

	socket.on('disconnect',()=>{
		 console.log('User has left!!!!'); 
	})
	
	
};

server.on('connection', onConnection);

httpServer.listen(4000);
