import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { providers, Contract } from 'ethers'
import Web3Modal from 'web3modal'


export default function Numbers() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert('Change the network to Mumbai');
      throw new Error('Change network to Mumbai');
    }
    
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err)
    }
  };

  const renderButton = () => {
    if (walletConnected) {
      return (
        <div className={styles.description}>
          Ready Playa 1 ?
        </div>
      );
    } else if (loading) {
      return <button className={styles.button}>Shuffling..</button>
    } else {
      return ( 
        <button onClick={connectWallet} className={styles.button}>
          Connect your wallet
        </button>
      )
    }
  }

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
        <div>{renderButton()}</div>
          <div>
            <h3>result:{result}</h3>
            

            
          
        
            
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
