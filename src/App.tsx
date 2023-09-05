import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Card, Header } from './components';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDataRequest } from './store/data/actions';
import { getDataState, getMovieList } from 'src/store/data/selectors';
import colors from './theme/colors';
import { Movie } from '@store/data/types';

const App = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const movieList = useSelector(getMovieList)!;
  const [movies, setMovies] = useState<Movie[]>(movieList ?? []);

  useEffect(() => {
    dispatch(fetchAllDataRequest());
  }, []);

  useEffect(() => {
    const results = movies.filter((m) =>
      m.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setMovies(keyword ? results : movieList);
  }, [keyword]);

  return (
    <div className={`wrapper flex w-full flex-col justify-start  h-full `}>
      <Header
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <div className='container px-5 h-full'>
        <div className='flex flex-wrap m-4 h-full'>
          {movies?.length ? (
            movies.map((movie, index) => <Card movie={movie} key={index} />)
          ) : (
            <div className='container h-full w-full flex '>
              No results. Please refine your search
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
