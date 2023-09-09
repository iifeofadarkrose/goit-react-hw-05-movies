import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'api/api';
import { Discuss } from 'react-loader-spinner';
import MoviesTrendingList from 'components/MoviesTrendingList/MoviesTrendingList';
import { Heading, WrapMoviesList, Loader, Error } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        setIsLoading(true);
        const moviesFetch = await fetchTrendingMovies();
        setMovies(moviesFetch.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <Heading>Trending today</Heading>
     <Error>{error !== null && <p>Oops, something went wrong. please, try later</p>}</Error>
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
      <WrapMoviesList>
        <MoviesTrendingList movieList={movies} />
      </WrapMoviesList>
    </div>
  );
};

export default HomePage;
