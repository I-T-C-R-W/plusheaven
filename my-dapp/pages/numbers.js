import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react'
import randomNumber from 'random-number-csprng';

export default function Numbers() {
  const [randNum, setRand] = useState(0);
  const [lowNum, setLow] = useState(0);
  const [highNum, setHigh] = useState(0);
  const [result, setResult] = useState();



  
  
  
 function lowNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
  }

  function highNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  
  
  const lowClick = () => {
    setRand(randomNumber(0, 56));    
    setLow(lowNumber(0, 27))

    if(randNum === lowNum) {
      return setResult('you win')
    } else {
      return setResult('you lose')
    }      
  }

  const highClick = () => {
    setRand(randomNumber(0, 56));    
    setHigh(highNumber(28, 56))

    if(randNum === highNum) {
      return setResult('you win')
    } else {
      return setResult('you lose')
    }      
  }

 









  
      

  

  
  

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
        <div className={styles.main}>
          <div>
            <h3>result:{result}</h3>
            <h3>result:{randNum}</h3>
            <h3>result:{lowNum}</h3>
            <h3>result:{highNum}</h3>

            
          
        
            
          </div>
          
          <div>
            <button onClick={lowClick}>Low</button>
            <button onClick={highClick}>High</button>
          </div>
        </div>
      </div>
        

      
    </div>
  )
}
