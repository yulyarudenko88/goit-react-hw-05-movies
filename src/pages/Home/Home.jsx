import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { fetchPopularMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import MainTitle from 'components/MainTitle/MainTitle';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getPopularMovies = async () => {
      try {
        const data = await fetchPopularMovies();        
        setPopularMovies(data);
        setLoading(false);
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
      {loading && <Loader />}
      {popularMovies === [] && (
        <MainTitle>
          Sorry for the inconvenience! Please try to use our service in a few
          minutes!
        </MainTitle>
      )}
      {!loading && popularMovies.length > 0 && (
        <>
          <MainTitle>Trending Today</MainTitle>
          <MoviesGallery movies={popularMovies} pathTo={`movies/`}/>
        </>
      )}
    </>
  );
};

export default Home;
