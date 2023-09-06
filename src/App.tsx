import React, { useEffect, useState } from 'react';
import { Card, Header } from './components';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDataRequest } from './store/data/actions';
import { getCurrentPage, getMovieList } from 'src/store/data/selectors';
import { Movie } from '@store/data/types';

import ReactPaginate from 'react-paginate';
import i18n from 'src/config/translation';

const App = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const movieList = useSelector(getMovieList);
  const currentPage = useSelector(getCurrentPage);
  const [movies, setMovies] = useState<Movie[]>(movieList || []);

  useEffect(() => {
    dispatch(fetchAllDataRequest({ page: currentPage }));
  }, []);

  useEffect(() => {
    const results = movies.filter((m) =>
      m.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setMovies(keyword ? results : movieList!);
  }, [keyword, movieList]);

  const handlePageClick = (event: { selected: number }) => {
    dispatch(fetchAllDataRequest({ page: event.selected + 1 }));
  };

  console.log({ movies });
  return (
    <div className={`wrapper flex w-full flex-col justify-start`}>
      <Header
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <div className='container px-[16px] h-full flex flex-wrap h-full'>
        {movies?.length ? (
          movies.map((movie, index) => (
            <Card movie={movie} index={index} key={index} />
          ))
        ) : (
          <div className='flex flex-1 h-screen pt-8 justify-center w-full flex bg-[#171717] '>
            <p className='text-white'>{i18n.t('noResults')}</p>
          </div>
        )}
      </div>
      {!keyword && (
        <div
          data-aos='fade-down-right'
          className='flex self-center w-full flex-col items-center justify-centers'
        >
          <ReactPaginate
            breakLabel='...'
            nextLabel='next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
            pageCount={3}
            previousLabel='< previous'
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
};

export default App;
