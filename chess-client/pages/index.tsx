import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.css';

import React from 'react';
import Link from 'next/link';

const Home = () => {
	return (
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
};
export default Home;
