import React, { useState, useEffect } from 'react';
import Searchbar from 'components/SearchBar/Searchbar';
import { fetchMovieSearch } from 'api/api';
import { useSearchParams } from 'react-router-dom';
import { Discuss } from 'react-loader-spinner';
import MoviesSearchingList from 'components/MoviesSearchingList/MoviesSearchingList';
import { Button } from 'components/Button/Button';
import { MoviesSearchListStyled, MoviesSearchTitle, Loader } from './MoviesPage.styled';
import { ButtonWrapStyled } from 'components/Button/Button.styled';

const MoviesPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(Number(searchParams.get('page') ?? ''));
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  useEffect(() => {
    async function fetchMovieList() {
      try {
        setIsLoading(true);
        const movies = await fetchMovieSearch(query, page);
        setMoviesList(movies.results);
        setTotalResults(movies.total_results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (!page || !query) {
      setSearchParams({});
    } else {
      fetchMovieList();
      setSearchParams({ query: query, page: page });
    }
  }, [page, query, setSearchParams]);

  const updateQueryString = query => {
    setPage(1);
    setQuery(query);
  };

  const handleBtnIncrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };
  const handleBtnDecrementPage = () => {
    if (page !== 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <main>
      <Searchbar onChange={updateQueryString} query={query} />
      <MoviesSearchListStyled>
        {error !== null && <p>Oops, something went wrong. please, try later</p>}
        {isLoading && (
          <Loader>
             <Discuss
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
      </Loader>
        )}
        {totalResults && (
          <MoviesSearchTitle>Total pages: {totalPages}</MoviesSearchTitle>
        )}

        {moviesList && <MoviesSearchingList searchList={moviesList} />}
        {totalResults && (
          <MoviesSearchTitle>Page number:{page}</MoviesSearchTitle>
        )}
        {moviesList?.length < totalResults / page && (
          <ButtonWrapStyled>
            <Button
              onChangePage={handleBtnDecrementPage}
              title="Previous page"
            />
            <Button onChangePage={handleBtnIncrementPage} title="Next page" />
          </ButtonWrapStyled>
        )}
      </MoviesSearchListStyled>
    </main>
  );
};

export default MoviesPage;
