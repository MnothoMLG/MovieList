import React, { FC, useEffect } from 'react';
import './card.css';
import { Movie } from '@store/data/types';
import { getImgURL } from '../../util';
interface CardProps {
  movie: Movie;
}

export const Card: FC<CardProps> = ({ movie }) => {
  return (
    <div className='px-3 py-2 w-1/3 aspect-[2/3] my-4'>
      <div className='h-full flex flex-col items-center text-center'>
        <img
          alt='team'
          className=' aspect-[2/3] w-full object-cover object-center mb-4'
          src={getImgURL(movie['poster-image'])}
        />
        <div className='w-full'>
          <p className='title-font text-sm text-white'>{movie.name}</p>
        </div>
      </div>
    </div>
  );
};
