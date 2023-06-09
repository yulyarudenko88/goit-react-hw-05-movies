import React from 'react';

import PropTypes from 'prop-types';
import MoviesGalleryItem from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { MoviesList } from './MoviesGallery.styled';

const MoviesGallery = ({ movies, pathTo }) => {
  return (
    <MoviesList>
      {movies.map(({ id, title, poster_path, overview }) => {
        let posterPath = '';

        if (poster_path) {
          posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
        } else {
          posterPath =
            'https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png';
        }

        return (
          <MoviesGalleryItem
            key={id}
            id={id}
            posterPath={posterPath}
            overview={overview}
            title={title} 
            pathTo={pathTo}           
          />
        );
      })}
    </MoviesList>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.array,
  pathTo: PropTypes.string.isRequired,
};

export default MoviesGallery;
