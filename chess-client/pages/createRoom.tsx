import Link from 'next/link';
import {useRouter} from 'next/router';
import React,{useRef,useState, useEffect} from 'react';
import styles from '../styles/Home.module.css';
import {io , Socket} from 'socket.io-client'

const socket = io('ws://localhost:3000');
socket.on('connect',()=>{
  console.log(`${socket.id} connected`);
})


const CreateRoom = () => {
  
  // const roomId = useRef<HTMLInputElement>(null);//use typescript
  const router  = useRouter();

  const [data,setData] = useState(" ");

  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    console.log('Clicked');
    console.log(`${inputRef.current?.value}`);
    socket.emit('join-room',`${inputRef.current?.value}`);
    // router.push(`/room`);
  }
  
  useEffect(()=>{
    const listen = socket.on('join-response',(err)=>{
      alert(err);
      return router.push('/');
    })
    // router.push(`/room?id=${inputRef.current?.value}`);
    alert('after 1st render');
  },[onClick]);



  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Create Room</h1>
        <form>
          <input type="text" placeholder='Enter Room Id' ref={inputRef}/>
            <button className={styles.btn} type='submit' onClick={onClick}>
              Create</button>
              <Link href='/'>
            <button className={styles.btn}>Game Room</button>
          </Link>
        </form>
    </div>
  )

}
export default CreateRoom;




// if(response.error){console.log(response.error)}
//       // else router.push(`/room?id=${inputRef.current?.value}`);
//     })

//     return ()=>{
//       listener.off();
//     }