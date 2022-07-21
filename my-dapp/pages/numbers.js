import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react'

export default function Numbers() {
  const [num, setNum] = useState(0);

  function lowNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const lowClick = () => {
    setNum(lowNumber(0, 27));
  };

  function highNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  const highClick = () => {
    setNum(highNumber(28, 56));
  };

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  const randNum = () => {
    setNum(randomNumber(0, 56));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (lowNumber || highNumber === randomNumber) {
        return 'you win';
      } else {
        return 'you lose'
      }
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Plusheaven</title>
        <link rel="icon" href=""/>
      </Head>
      <div className={styles.body}>
      <div className={styles.nav}>
        <div className={styles.nav_links}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/cards">
                <a>Cards</a>
            </Link>
            </li>
            <li>
              <Link href="/numbers">
                <a>Numbers</a>
            </Link>
            </li>
          </ul>
        </div>
      </div>
        <button onClick={lowClick}></button>
        <button onClick={highClick}></button>
      </div>
        

      
    </div>
  )
}
