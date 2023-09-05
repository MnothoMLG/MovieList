import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Card, Header } from './components';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDataRequest } from './store/data/actions';
import {
  getCurrentPage,
  getDataState,
  getMovieList,
} from 'src/store/data/selectors';
import { Movie } from '@store/data/types';

import ReactPaginate from 'react-paginate';

const App = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const movieList = useSelector(getMovieList)!;
  const currentPage = useSelector(getCurrentPage);
  const [movies, setMovies] = useState<Movie[]>(movieList ?? []);

  useEffect(() => {
    dispatch(fetchAllDataRequest({ page: currentPage }));
  }, []);

  useEffect(() => {
    console.log('keyword change ===>', { keyword });
    const results = movies.filter((m) =>
      m.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setMovies(keyword ? results : movieList);
  }, [keyword]);

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    console.log({ event });
    if (event.selected) {
      dispatch(fetchAllDataRequest({ page: currentPage! + 1 }));
    } else {
      dispatch(fetchAllDataRequest({ page: currentPage! - 1 }));
    }
  };

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
  );
};

export default App;
