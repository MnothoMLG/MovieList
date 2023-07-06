import _ from 'lodash';
import {
  CapSVG,
  DungareeSVG,
  KicksSVG,
  LetterCard1,
  LetterCard10,
  LetterCard2,
  LetterCard3,
  LetterCard4,
  LetterCard5,
  LetterCard6,
  LetterCard7,
  LetterCard8,
  LetterCard9,
  SkirtSVG,
  TshirtSVG,
} from '../assets/svg';
export * from './types';
export * from './strings';

export const gamecards = [
  {
    symbol: 'Kicks',
    backImg: KicksSVG,
    flipped: false,
    matched: false,
  },
  {
    symbol: 'Dungaree',
    backImg: DungareeSVG,
    flipped: false,
    matched: false,
  },
  {
    symbol: 'Cap',
    backImg: CapSVG,
    flipped: false,
    matched: false,
  },
  {
    symbol: 'Tshirt',
    backImg: TshirtSVG,
    flipped: false,
    matched: false,
  },
  {
    symbol: 'Skirt',
    backImg: SkirtSVG,
    flipped: false,
    matched: false,
  },
];

export const getBoard = () =>
  _.shuffle(
    [...gamecards, ...gamecards].map((card, index) => ({
      ...card,
      card_id: index,
    }))
  );

export const completionCards = [
  LetterCard1,
  LetterCard2,
  LetterCard3,
  LetterCard4,
  LetterCard5,
  LetterCard6,
  LetterCard7,
  LetterCard8,
  LetterCard9,
  LetterCard10,
];
