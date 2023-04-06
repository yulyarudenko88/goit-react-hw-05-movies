import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieListItem, MovieLink } from './MoviesGalleryItem.styled';

const MoviesGalleryItem = ({ id, posterPath, overview, title, to }) => {
  const location = useLocation();
  console.log(location);

  return (
    <MovieListItem>
      <MovieLink to={to}>
        <img src={posterPath} alt={overview} />
        <p>{title}</p>
      </MovieLink>
    </MovieListItem>
  );
};


MoviesGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MoviesGalleryItem;
