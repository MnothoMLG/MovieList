import React, { ChangeEvent, FC } from 'react';
import './index.css';
interface InputProps {
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<
  InputProps & Partial<React.HTMLProps<HTMLInputElement>>
> = (props) => {
  return (
    <div className='w-full bg-transparent'>
      <input
        className={`appearance-none rounded-xl bg-transparent h-10 w-full mx-4 text-[#fff] leading-tight focus:outline-none focus:shadow-outline ${
          props.error ? 'border-red-500 border' : ''
        }`}
        id='name'
        type='text'
        {...props}
      />
      {props.error && (
        <p className='font-mid text-red-600 text-[12px] m-1'>{props.error}</p>
      )}
    </div>
  );
};
