import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
