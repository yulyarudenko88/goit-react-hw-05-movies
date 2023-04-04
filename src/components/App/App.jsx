import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import MovieCast from 'components/MovieCast/MovieCast';
import MovieReviews from 'components/MovieReviews/MovieReviews';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
