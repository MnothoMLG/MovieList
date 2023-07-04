import {FC} from 'react';
import './card.css';
import { ICard } from '../../constants/types';

interface CardProps { 
    card : ICard; 
    flipCard: (cardId: number) => void; 
    disabled?: boolean;
}



export const Card : FC<CardProps> = ({ card, flipCard, disabled }) => {

    const Icon = card.backImg

    return (
      <div
        className={`card rounded-xl ${card.flipped ? 'no-flip' :'flip'} rounded`} 
        onClick={() => flipCard(card.id)}
      >
        <div className="card-front rounded">
          
        </div>
        <div className="card-back rounded">
          <Icon />
        </div>
      </div>
    );
  };