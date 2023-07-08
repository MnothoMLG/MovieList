require('./config/firebase');
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Card, LoadingOverlay, SignUpForm, Text } from './components';
import './App.css';
import { ICard } from './constants/types';
import { getBoard, strings } from './constants';
import { ReplayIcon } from './assets/svg';
import { NULL } from 'sass';

const App = () => {
  const [flippedCards, setFlippedCards] = useState<ICard[]>([]);
  const [boardLocked, setBoardLocked] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [userWon, setWon] = useState(true);
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

  // useEffect(() => {
  //   setGameOver(!tries);
  //   setWon(board.every((card) => card.matched));
  //   console.log('setting won');
  // }, [board, tries]);

  return (
    <div className='wrapper flex w-full bg-[#EFEEEB] flex-col items-start sm:items-center justify-between sm:justify-center h-screen px-[12px] sm:px-[36px] sm:py-[42px]'>
      <LoadingOverlay />
      <div className='flex w-full flex-col-reverse sm:flex-row   justify-between items-end'>
        <div className='card-grid grid grid-rows-2 grid-cols-5 gap-3 w-full '>
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
          {gameOver && !userWon ? (
            <>
              <Text className='text-red-400 my-2'> Game Over</Text>
              <button className='btn my-2' onClick={restartGame}>
                <ReplayIcon />
                <p className='ml-1'>{strings.replay}</p>
              </button>
            </>
          ) : (
            <></>
          )}

          <div className='flex flex-col justify-between h-full'>
            <div>
              <Text className='mb-8'>
                {strings.tries.replace('{0}', String(tries))}
              </Text>

              <Text nanum>{strings.mixMatch}</Text>
            </div>
            <div>
              <Text mid size={36}>
                {strings.perfectPlace1}
                <Text bold>{strings.buySell}</Text>
                <Text mid>{strings.perfectPlace2}</Text>
              </Text>
              <Text className='mt-2 mb-8' bold size={24}>
                {strings.delivering1}
                <Text mid size={24}>
                  {strings.delivering2}
                </Text>
              </Text>
            </div>
          </div>
        </div>
      </div>
      <SignUpForm />
    </div>
  );
};

export default App;
