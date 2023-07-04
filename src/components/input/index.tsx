import React, { FC } from 'react';


export const Input: FC<React.HTMLProps<HTMLInputElement> > = (props) => {
  return (

        <div className="">
          <input
            className="appearance-none rounded-xl bg-[#EFEEEA]  w-full py-2 px-3 text-[#000] text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            {...props}
          />
        </div>
  );
};
