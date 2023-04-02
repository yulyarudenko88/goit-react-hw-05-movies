import axios from 'axios';

const KEY = 'f1b9f490c3f9fd9cec22fc21dcac3bcf';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export async function fetchPopularMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return await response.data.results;
}

export async function fetchMovieById(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${KEY}&language=en-US`);
  return await response.data;
}
