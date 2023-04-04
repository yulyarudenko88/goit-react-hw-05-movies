import React from 'react';
import PropTypes from 'prop-types';
import { MovieListItem, MovieLink } from './MoviesGalleryItem.styled';

const MoviesGalleryItem = ({ id, posterPath, overview, title }) => (
  <MovieListItem>
    <MovieLink to={`movies/${id}`}>
      <img src={posterPath} alt={overview} />
      <p>{title}</p>
    </MovieLink>
  </MovieListItem>
);

MoviesGalleryItem.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      overview: PropTypes.string.isRequired,
    })
  ),
};

MoviesGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MoviesGalleryItem;
