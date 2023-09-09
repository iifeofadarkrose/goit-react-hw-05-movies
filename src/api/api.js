import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'c386e8b288993af3daa930866edd5828';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzg2ZThiMjg4OTkzYWYzZGFhOTMwODY2ZWRkNTgyOCIsInN1YiI6IjY0ZjhjMGUwZmZjOWRlMDBjNGExZWI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RSJYj5_qh9lA0FcInIa0sGWqA44kBSzQ826duTlAxt0',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/3/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    options
  );
  return data;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
    options
  );

  return data;
};

export const fetchMovieCredits = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`,
    options
  );

  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`,
    options
  );

  return data;
};

export const fetchMovieSearch = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`,
    options
  );
  return data;
};
