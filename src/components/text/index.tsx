import React, { FC } from 'react';

export const Text: FC<React.HTMLProps<HTMLParagraphElement>> = (props) => {
  return (
    <div className=''>
      <p {...props} />
    </div>
  );
};
