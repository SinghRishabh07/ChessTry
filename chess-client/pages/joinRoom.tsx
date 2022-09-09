import React from 'react';
import Link from  'next/link';
import styles from '../styles/Home.module.css';
import {useRouter} from 'next/router';



const joinRoom = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Join Room</h1>
        <form>
            <input type='text' placeholder='Enter Room Id' />
            <Link href={'/createRoom'}>
              <button className={styles.btn}>Join</button>
              </Link>       

            <Link href={'/'}>
              <button className={styles.btn}>Game Room</button>
            </Link>        

        </form>
    </div>
  )
}

export  default joinRoom;