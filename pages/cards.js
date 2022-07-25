import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { providers, Contract } from 'ethers'
import Web3Modal from 'web3modal'
import { useEffect, useRef, useState } from 'react'


const suits = ["diamonds", "clubs", "hearts", "spades"];
const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initCards = [];
for (const s of suits) {
  for (const v of values) {
    initCards.push(`${s}_${v}`);
  }
}


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
        <div class={styles.description}>
          Ready Playa 1 ?
        </div>
      );
    } else if (loading) {
      return <button class={styles.button}>Shuffling..</button>
    } else {
      return ( 
        <button onClick={connectWallet} class={styles.button}>
          Connect your wallet
        </button>
      )
    }
  }
  
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([...initCards].sort(() => Math.random() - 0.5));

  const [drawnCards, setDrawnCards] = useState([]);
  const [guess, setGuess] = useState("lower");

  const draw = (e) => {
    e.preventDefault();
    setCards((cards) => cards.slice(0, cards.length -1));
    setDrawnCards((drawnCards) => [...drawnCards, cards[cards.length -1]]);
  };

  useEffect(() => {
    const indexLastCard = initCards.indexOf(drawnCards[drawnCards.length - 2]);
    const indexDrawnCard = initCards.indexOf(drawnCards[drawnCards.length -1]);

    if (
      (indexLastCard < indexDrawnCard && guess === "higher") ||
      (indexLastCard > indexDrawnCard && guess === "lower")
    ) {
      setScore((score) => score + 1);
    }
  }, [drawnCards, guess, cards]);

 


  return (
    <div>
      <Head>
        <title>Plusheaven</title>
        <link rel="icon" href=""/>
      </Head>
      <div class={styles.body}>
      <div class={styles.nav}>
        <div class={styles.nav_links}>
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
      <div>{renderButton()}</div>
        <form onSubmit={draw}>
          <select value={guess} onChange={(e) => setGuess(e.target.value)}>
            <option>lower</option>
            <option>higher</option>
          </select>
          <button type="submit">guess</button>
        </form>
        <p>score: {score}</p>
        <p>last drawn card</p>
          {drawnCards[drawnCards.length - 2] && (
            <img
              alt="last drawn card"
              src={`https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/${
              drawnCards[drawnCards.length - 2]
              }.svg`}
            />
          )}
        <p>currently drawrn card</p>
          {drawnCards[drawnCards.length - 1] && (
            <img
              alt="currently drawn card"
              src={`https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/${
              drawnCards[drawnCards.length - 1]
              }.svg`}
            />
          )}
      </div>
    </div>
  )
}