import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesList } from "./MoviesGallery.styled";

const MoviesGallery = ({ movies }) => {
  return (
    <MoviesList
    >
      {movies.map(({ id, title, poster_path, overview }) => {
        let posterPath = '';

        if (poster_path) {
          posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
        } else {
          posterPath =
            'https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png';
        }

        return (
          <li
            key={id}
            style={{
              backgroundColor: '#50c878',
              border: '1px #102818',
              borderRadius: '5px',
              boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
            }}
          >
            <Link
              to={`movies/${id}`}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <img
                src={posterPath}
                alt={overview}
                style={{ display: 'block', width: '100%' }}
              />
              <p
                style={{
                  padding: '4px 8px',
                  color: 'white',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                {title}
              </p>
            </Link>
          </li>
        );
      })}
    </MoviesList>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      overview: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesGallery;
