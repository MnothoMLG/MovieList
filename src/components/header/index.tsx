import { getImgURL } from 'src/util/index';
import React, { ChangeEvent, FC, useState } from 'react';
import { images } from 'src/constants/strings';
import { Input } from 'src/components/input';
import { useSelector } from 'react-redux';
import { getPageTitle } from 'src/store/data/selectors';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Header: FC<Props> = ({ onChange }) => {
  const [searching, setSearching] = useState(false);
  const [value, setValue] = useState<string>('');
  const title = useSelector(getPageTitle);
  return (
    <div className='h-20 w-full absolute sticky top-0 relative z-30 w-full '>
      <div
        className={`h-full w-full flex px-4 items-center bg-cover object-fill flex-row `}
        style={{
          backgroundImage: `url(${getImgURL(images.NAV)})`,
        }}
      >
        <img className='w-8 h-8' src={getImgURL(images.BACK)} />
        {!searching && !value ? (
          <div className='text-white w-full mx-4'>{title}</div>
        ) : (
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              onChange(e);
              setValue(e.target.value);
            }}
            onBlur={() => {
              setSearching(false);
            }}
          />
        )}
        <img
          className='w-8 h-8'
          onClick={() => {
            setSearching(true);
          }}
          src={getImgURL(images.SEARCH)}
        />
      </div>
    </div>
  );
};
