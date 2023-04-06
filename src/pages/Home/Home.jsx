import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { fetchPopularMovies } from 'services/api';
import MainTitle from 'components/MainTitle/MainTitle';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setPopularMovies(data);
      } catch (error) {
        toast.error(
          'Sorry for the inconvenience! Please try to use our service in a few minutes!'
        );
      }
    };
    getPopularMovies();
  }, []);

  return (
    <>
      {popularMovies === [] && (
        <MainTitle>
          Sorry for the inconvenience! Please try to use our service in a few
          minutes!
        </MainTitle>
      )}
      {popularMovies.length > 0 && (
        <>
          <MainTitle>Trending Today</MainTitle>
          <MoviesGallery movies={popularMovies} pathTo={`movies/`} />
        </>
      )}
    </>
  );
};

export default Home;
