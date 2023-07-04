import React, { useState,FC, useEffect } from 'react';
import _ from "lodash";
import { BasketballSVG, BeeSVG, MusicSVG, ShoesSVG } from './assets/svg';
import {Card, SignUpForm} from "./components"
import './App.css';
import { ICard } from './constants/types';


const cards = [{
  symbol: "Basket",
  backImg: BasketballSVG,
  flipped: false,
  matched: false,
  
},{

  symbol: "Bee",
  backImg: BeeSVG,
  flipped: false,
  matched: false,
  
},{
  symbol: "Music",
  backImg: MusicSVG,
  flipped: false,
  matched: false,
  
},{
  symbol: "Shoes",
  backImg: ShoesSVG,
  flipped: false,
  matched: false,
  
}]

const App = () => {
  const [flippedCards, setFlippedCards] = useState<ICard[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [board, setBoard] = useState(_.shuffle([...cards, ...cards]).map((card, index) => ({...card, id: index})))

  const flipCard = (cardId: number) => {
    if (disabled) return;
    const flippedCard: ICard = board.find((card) => card.id === cardId)!;

    console.log({flippedCard})
    flippedCard.flipped = true;
    setFlippedCards((oldCards) => ([...oldCards, flippedCard]));

    console.log("Flipped cards ===>", {flippedCards})
  
  };

  useEffect(()=>{

    console.log("the cards changed" , {flippedCards})
    if (flippedCards.length === 2) {
      setDisabled(true);
      setTimeout(() => {
        const [card1, card2] = flippedCards;

        console.log({card1 , card2})
        if (card1.symbol === card2.symbol) {
          card1.matched = true;
          card2.matched = true;
        } else {
          card1.flipped = false;
          card2.flipped = false;
        }
        setFlippedCards([]);
        setDisabled(false);
      }, 1000);
    }
  }, [flippedCards])

  useEffect(() => {
    const isFinished = board.every((card) => card.matched);

    if (isFinished) {
      // alert('Congratulations! You won the game!');
    }
  }, [board]);

  return (
    <div className="flex w-full bg-[#EFEEEB] flex-col items-center justify-center h-screen px-[36px] py-[42px]">
      <div className='flex w-full flex-row justify-between items-end'>
        <div className="card-grid grid grid-cols-2 sm:grid-cols-4 gap-4 w-4/5 sm:w-full max-w-screen-lg">
          {board.map((card) => (
            <Card
              key={card.id}
              card={card}
              flipCard={flipCard}
              disabled={disabled}
            />
            ))} 
        </div>
        <div className="ml-2">
          <p className='text-xl '>The perfect place to buy & sell premium, pre-loved fashion for littl ones!</p>
          <p className='text-lg '>Delivering something sweet, real soon!</p>
        </div>
      </div>
        <SignUpForm />
    </div>
  );
};

export default App;

