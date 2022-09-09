import type { NextPage } from 'next'
import {useEffect, useState, useRef} from 'react'
import styles from '../styles/Home.module.css'
 
import React from 'react';
import Link from 'next/link';

const Home = ()=>{
    return(
      <div className={styles.container}>
        <h1 className={styles.heading}>Game Room</h1>
        <Link href='/joinRoom'>
          <a className={styles.btn}>Join Room</a> 
        </Link>
        <Link href='/createRoom'>
          <a className={styles.btn}>Create Room</a>   
        </Link>
      </div>
      
    ); 

}
export default Home ;    
// const socket = io('ws://localhost:3000');
// socket.on('connect',()=>{
//     console.log(`you connected with id : ${socket.id}`);
// })



// const Home: NextPage = () => {
//   const roomInput = useRef<HTMLInputElement>(null);
//   const msgInput = useRef<HTMLInputElement>(null);
  
//   const [msgs, setMsgs] = useState<string[]>([]);

//   useEffect(()=>{
//     socket.on('receive-Message',(msg)=>{
//       setMsgs((old)=>[...old, msg]);
//     });
//   }, [])
  

//   return (
//     <div>
//         <form onSubmit={(e)=>{
//          e.preventDefault();
//           const msg:string = msgInput.current?.value;
//           const room = roomInput.current?.value;
//           socket.emit('send-message',msg,room);
//           setMsgs((old)=>[...old, msg]);
//           msgInput.current!.value = '';
//         }}>
//             <input ref={msgInput} type="text"/>
//             <button type='submit'>Send</button>
//             <input ref={roomInput} type="text"/>
//             <button onClick={(e)=>{
//                 const room = roomInput.current?.value;
//                 socket.emit('join-room', room);
//             }}>Join</button>
//             {
//               msgs.map((msg,index)=>{
//                 return <div key={index}>{msg}</div>
//               })
//             }
//         </form>
//     </div>
//   )
// }

// export default Home
