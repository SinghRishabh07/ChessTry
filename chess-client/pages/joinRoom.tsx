import React, {useEffect, useRef} from 'react';
import Link from  'next/link';
import styles from '../styles/Home.module.css';
import {useRouter} from 'next/router';
import { socket } from '../utils/socket';
import type { MouseEvent } from 'react';




const joinRoom = () => {
  
  const router = useRouter();
  const roomInput = useRef<HTMLInputElement>(null);  
  const joinRoom =(e:MouseEvent<HTMLElement>)=>{
    e.preventDefault();
    socket.emit('join-room',`${roomInput.current?.value}`);
  }
  useEffect(()=>{
    const listener = socket.on('join-response',(res)=>{
      if(res.error) console.log('server error sorry!!!');
      else router.push(`/room/?id=${roomInput.current?.value}`)
    })
    return ()=>{
      listener.off();
    };

  },[])
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Join Room</h1>
        <form>
            <input type='text' placeholder='Enter Room Id' ref={roomInput} />
              <button className={styles.btn} onClick={joinRoom}>Join</button>
                 

            <Link href={'/'}>
              <button className={styles.btn}>Game Room</button>
            </Link>        

        </form>
    </div>
  )
}

export  default joinRoom;