import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieListItem, MovieLink } from './MoviesGalleryItem.styled';

const MoviesGalleryItem = ({ id, posterPath, overview, title, pathTo }) => {
  const location = useLocation();

  return (
    <MovieListItem>
      <MovieLink to={`${pathTo}${id}`} state={location}>
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
  pathTo: PropTypes.string.isRequired,
};

export default MoviesGalleryItem;
