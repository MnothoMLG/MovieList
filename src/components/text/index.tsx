import React, { FC } from 'react';
import './text.css';

export const Text: FC<
  React.HTMLProps<HTMLParagraphElement> & {
    bold?: boolean;
    mid?: boolean;
    nanum?: boolean;
    size?: number;
  }
> = (props) => {
  return (
    <div
      className={`${
        props.bold ? 'text-bold' : props.mid ? 'text-mid' : 'text-regular'
      }   ${props.nanum ? 'nanum-font' : ''} text-[${props.size || 13}px]`}
    >
      <p {...props} />
    </div>
  );
};
