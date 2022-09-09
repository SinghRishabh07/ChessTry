import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { socket } from '../utils/socket';

const room = () => {
	const router = useRouter();
	// const {id} = router.query;
	const id = router.query.id;

	const msgInput = useRef<HTMLInputElement>(null);
	const [chats, setChats] = useState<string[]>([]);

	const sendMsg = () => {
		const msg: any = msgInput.current?.value;
		setChats(msg);
		socket.emit('send-message', chats, id);
		console.log(chats);
		msgInput.current!.value = '';
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>{id} Room</h1>
			<input type='text' placeholder='New Message!!' ref={msgInput} />
			<button className={styles.btn} onClick={sendMsg}>
				Send
			</button>
			<Link href='/'>
				<button className={styles.btn}>Game Room</button>
			</Link>
			{chats.map((msg, index) => {
				return <div key={index}>{msg}</div>;
			})}
		</div>
	);
};
export default room;
