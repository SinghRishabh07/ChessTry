import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { socket } from '../utils/socket';
// import styles from '../styles/room.module.css';
import styles from '../styles/Home.module.css';


const room = () => {
	const router = useRouter();
	const id = router.query.id;

	const msgInput = useRef<HTMLInputElement>(null);
	const [message,setmessage] = useState('')
	const [chats, setchats] = useState<string[]>([]);

	const sendMsg = () =>{
		const msg: any = msgInput.current?.value;
		setmessage(msg);
		setchats([...chats,msg]);
		socket.emit('send-message',{id,message});
		msgInput.current!.value = '';
	}
	

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>{id}'s Chat Room</h1>
			<input type='text' placeholder='New Message!!' ref={msgInput} />
			<button className={styles.btn} onClick={sendMsg} >
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

{/* <div className={styles.chatPage}>
			<div className={styles.chatContainer}>
				<div className={styles.header}> {id}'s Chat Room</div>
				<div className={styles.chatBox}>
					{chats.map((msg, index) => {
						return <div key={index}>{msg}</div>;
			
						})}
				</div>
				<div className={styles.inputBox}>
					<input type="text" placeholder='Enter your Message' ref={msgInput} className={styles.chatInput}/>
					<button className={styles.sendBtn} onClick={sendMsg}>Send</button>
				</div>
				
			</div>
		</div> */}





		// const sendMsg = () => {
		// 	const msg: any = msgInput.current?.value;
		// 	setmessage(msg);
		// 	setchats([...chats,message]);
		// 	socket.emit('send-message', {msg,id});
		// 	console.log(message);
		// 	console.log(chats);
		// 	msgInput.current!.value = '';
		// };