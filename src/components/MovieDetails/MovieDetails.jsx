import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  console.log(movieId);

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        const response = await fetchMovieById(movieId);

        console.log(response);
        setMovie(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  const { poster_path, tagline, title, vote_average, overview, genres } = movie;

  return (
    <>
      <Link to="/">Go back</Link>
      <div
        style={{
          display: 'flex'
        }}
      >
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={tagline}
            style={{ maxWidth: '320px' }}
          />
        )}
        <div
          style={{
            padding: '4px 8px',
          }}
        >
          <h2>{title}</h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h4>Genres</h4>
            <ul style={{
          display: 'flex',
          gap: '12px',
          listStyle: 'none'
        }}>{genres?.map(genre => <li>{genre.name}</li>)}</ul>
          </div>
        </div>
        <Outlet/>
      </div>
    </>
  );
};
export default MovieDetails;
