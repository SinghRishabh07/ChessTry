import { Server, Socket } from 'socket.io';

import { createServer } from "http";

const httpServer = createServer();

const server = new Server(httpServer,{
    cors:{
        origin:'*' 
    }
});


const onConnection = (socket: Socket):void => {
    // console.log(`Connected with ${socket.id}`);
    socket.on('send-message', (message:string, room:string)=>{
        socket.to(room).emit('receive-Message',message);
        console.log(message);

    })
    try{
        socket.on('join-room',(room:string)=>{
            socket.join(room);
            socket.emit('receive-Message',`joined the room ${room}`);  
        })    
    }catch(error){
        socket.emit('join-response',`${error}`);
    }  
}

server.on('connection', onConnection);

httpServer.listen(3000);
