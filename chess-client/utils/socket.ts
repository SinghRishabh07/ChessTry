import { io } from 'socket.io-client';

export const socket = io('ws://localhost:4000');

socket.on('connect', () => {
	console.log(`${socket.id} connected`);
});
