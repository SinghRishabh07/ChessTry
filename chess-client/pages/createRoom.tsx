import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import type { MouseEvent } from 'react';

import { socket } from '../utils/socket';

const CreateRoom = () => {
	const router = useRouter();

	const inputRef = useRef<HTMLInputElement>(null);

	const userRef = useRef<HTMLInputElement>(null);

	const emitJoinRoom = (e :MouseEvent<HTMLElement>) => {
		e.preventDefault();
		socket.emit('join-room', `${inputRef.current?.value}`,`${userRef.current?.value}`);
	};

	useEffect(() => {
		const listener = socket.on('join-response', (response) => {
			if (response.error) console.log('server error on join room');
			else router.push(`/room/?id=${response.data.roomId}&user=${response.data.name}`);
		});

		return () => {
			listener.off();
		};
	}, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Create Room</h1>
			<input type="text" placeholder='Enter Your Name' ref={userRef} className={styles.userInput}/>
			<input type='text' placeholder='Enter Room Id' ref={inputRef} className={styles.roomInput}/>
			<button className={styles.btn} onClick={emitJoinRoom}>
				Create
			</button>
			<Link href='/'>
				<button className={styles.btn}>Game Room</button>
			</Link>
		</div>
	);
};
export default CreateRoom;

//todo :
// 1) on empty field no actions should be performed
// 2) error handling