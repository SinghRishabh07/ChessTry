import { Server, Socket } from 'socket.io';

import { createServer } from 'http';

const httpServer = createServer();

const server = new Server(httpServer, {
	cors: {
		origin: '*'
	}
});

const users : any = [];

const onConnection = (socket: Socket): void => {
	
	socket.on('send-message',(data)=>{
		console.log('message received');
		server.to(data.id).emit('receive-message',data.msg,data.user);
	})
	
	socket.on('join-room', (roomId: string,name: string) => {
		socket.join(roomId);
		const user ={id: socket.id, name , roomId};
		users.push(user);
		console.log(users);
		const data = { roomId , name};
		socket.emit('join-response', { data, error: false });
	});

	// socket.on('disconnect',()=>{
	// 	 console.log('User has left!!!!'); 
	// })
	
	
};

server.on('connection', onConnection);

httpServer.listen(4000);
