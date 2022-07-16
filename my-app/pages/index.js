import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';

const suits = ["diamonds", "clubs", "hearts", "spades"];
const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initCards = [];
for (const s of suits) {
  for (const v of values) {
    initCards.push(`${s}_${v}`);
  }
}


export default function App() {
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
    <div className="App">
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
  )
}
