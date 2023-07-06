require('./config/firebase');
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Card, SignUpForm } from './components';
import './App.css';
import { ICard } from './constants/types';
import { getBoard, strings } from './constants';
import { ReplayIcon } from './assets/svg';

const App = () => {
  const [flippedCards, setFlippedCards] = useState<ICard[]>([]);
  const [boardLocked, setBoardLocked] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [userWon, setWon] = useState(false);
  const [tries, setTries] = useState(8);
  const [board, setBoard] = useState(getBoard());

  const restartGame = () => {
    setBoard(getBoard());
    setWon(false);
    setGameOver(false);
    setFlippedCards([]);
    setTries(8);
  };

  const flipCard = (cardId: number) => {
    if (boardLocked || !tries) return;
    const flippedCard: ICard = board.find((card) => card?.card_id === cardId)!;
    flippedCard.flipped = true;
    setFlippedCards((oldCards) => [...oldCards, flippedCard]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setBoardLocked(true);
      setTimeout(() => {
        const [card1, card2] = flippedCards;
        if (card1.symbol === card2.symbol) {
          card1.matched = true;
          card2.matched = true;
        } else {
          card1.flipped = false;
          card2.flipped = false;
        }
        setFlippedCards([]);
        setTries((old) => old - 1);
        setBoardLocked(false);
      }, 1000);
    }
  }, [flippedCards]);

  useEffect(() => {
    setGameOver(!tries);
    setWon(board.every((card) => card.matched));
  }, [board, tries]);

  return (
    <div className='wrapper flex w-full bg-[#EFEEEB] flex-col items-start sm:items-center justify-between sm:justify-center h-screen px-[12px] sm:px-[36px] sm:py-[42px]'>
      <div className='flex w-full flex-col-reverse sm:flex-row   justify-between items-end'>
        <div className='card-grid grid grid-rows-2 grid-cols-5 gap-2 w-full '>
          {board.map((card) => (
            <Card
              key={card.card_id}
              card={card}
              gameWon={userWon}
              flipCard={flipCard}
              disabled={boardLocked}
            />
          ))}
        </div>
        <div className='sm:ml-2 h-full sm:w-[380px] flex flex-col mt-4 sm:mt-0 itme justify-between sm:ml-[48px] display-none sm:display-flex'>
          <button className='btn' onClick={restartGame}>
            <>
              <ReplayIcon />
              <p className='ml-1'>{strings.replay}</p>
            </>
          </button>
          <div>
            <p className='nanum'>{strings.mixMatch}</p>
            <p>
              {'Tries remaining:'} {tries}
            </p>
            <p className='text-xl '>{strings.perfectPlace}</p>
            <p className='delivering-something'>{strings.delivering}</p>
          </div>
        </div>
      </div>
      <SignUpForm />
    </div>
  );
};

export default App;
