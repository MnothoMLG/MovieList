import React, { FC } from 'react';
import './card.css';

import { ICard, completionCards } from '../../constants/';

interface CardProps {
  card: ICard;
  flipCard: (cardId: number) => void;
  disabled?: boolean;
  gameWon?: boolean;
}

export const Card: FC<CardProps> = ({ card, flipCard, gameWon, disabled }) => {
  const Icon = gameWon ? completionCards[card.card_id] : card.backImg;

  console.log({ gameWon });
  return (
    <div
      className={`card rounded-xl ${
        card.flipped || gameWon ? 'no-flip' : 'flip'
      } w-full bg-cover bg-no-repeat bg-center w-full w-[68px] md:w-[138px] md:h-[260px] h-[112px] `}
      onClick={() => !disabled && flipCard(card.card_id)}
    >
      <div className='card-front rounded-xl'></div>
      <div className='card-back rounded-xl '>
        <Icon />
      </div>
    </div>
  );
};
