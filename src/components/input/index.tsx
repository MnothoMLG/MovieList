import React, { FC } from 'react';

interface InputProps {
  error?: string;
}

export const Input: FC<React.HTMLProps<HTMLInputElement> & InputProps> = (
  props
) => {
  console.log('input error', { error: props.error });
  return (
    <div className=''>
      <input
        className={`appearance-none rounded-xl bg-[#EFEEEA] h-10 w-full py-2 px-3 text-[#000] text-xs leading-tight focus:outline-none focus:shadow-outline ${
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
