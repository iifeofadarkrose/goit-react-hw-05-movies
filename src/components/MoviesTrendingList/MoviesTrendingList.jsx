import MovieTrendingItem from 'components/MoviesTrendingList/MovieTrendingItem/MovieTrendingItem';
import PropTypes from 'prop-types';
import { StyledMoviesList } from './MoviesTrendingList.styled';

const MoviesTrendingList = ({ movieList }) => {
  if (movieList === 0) {
    return;
  }
  return (
    <StyledMoviesList>
      {movieList.map(movie => (
        <MovieTrendingItem key={movie.id} movieItem={movie} />
      ))}
    </StyledMoviesList>
  );
};

MoviesTrendingList.propTypes = {
  movieList: PropTypes.array.isRequired,
};

export default MoviesTrendingList;