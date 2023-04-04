import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { fetchMovieById } from 'services/api';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    const getMovieById = async movieId => {
      try {
        const response = await fetchMovieById(movieId);

        console.log(response);
        setMovie(response);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  const { poster_path, tagline, title, vote_average, overview, genres, release_date } = movie;

  return (
    <>
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          gap: '4px',
          marginTop: '12px',
          marginLeft: '12px',
          padding: '10px 20px',
          backgroundColor: 'rgb(80, 200, 120',
          color: ' white',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none',
          fontSize: '16px',
          borderRadius: '12px',
        }}
      >
        <FiArrowLeft
          style={{
            width: '20px',
            height: '20px',
          }}
        />
        Go back
      </Link>
      {loading && <Loader />}
      {!loading && movie !== {} && (
        <>
          <section
            style={{
              display: 'flex',
              padding: '12px',
              alignItems: 'center'
            }}
          >
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={tagline}
                style={{
                  marginRight: '20px',
                  maxWidth: '320px',
                  boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2)',
                }}
              />
            )}
            <div
              style={{
                maxWidth: '500px',
                padding: '4px 8px',
                border: '2px solid rgb(80, 200, 120',
                boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2)',
              }}
            >
              <h1>"{title}" ({new Date(release_date).getFullYear()})</h1>
              <p>User score: {Math.round(vote_average * 10)}%</p>
              <div>
                <h2>Overview</h2>
                <p>{overview}</p>
              </div>
              <div>
                <h3>Genres</h3>
                <ul
                  style={{
                    display: 'flex',
                    gap: '12px',
                    listStyle: 'none',
                  }}
                >
                  {genres?.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div
              style={{
                padding: '12px',
                backgroundColor: 'rgb(80, 200, 120',
                color: 'white',
              }}
            >
              <h2>Additional information</h2>
              <ul
                style={{
                  display: 'flex',
                  gap: '20px',
                  listStyle: 'none',
                }}
              >
                <li>
                  <Link
                    to="cast"
                    style={{
                      display: 'inline-flex',
                      padding: '10px 20px',
                      color: ' white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none',
                      borderRadius: '12px',
                      border: '1px solid white',
                      textTransform: 'uppercase',
                    }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to="reviews"
                    style={{
                      display: 'inline-flex',
                      padding: '10px 20px',
                      color: ' white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none',
                      borderRadius: '12px',
                      border: '1px solid white',
                      textTransform: 'uppercase',
                    }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div
              style={{
                padding: '12px',
              }}
            >
              <Outlet />
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default MovieDetails;
