import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'services/api';
import Loader from 'components/Loader/Loader';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    setLoading(true);

    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        console.log(data.cast);
        setCast(data.cast);
        setLoading(false);
      } catch (error) {
        console.log(error.messages);
      }
    };
    getMovieCast();
  }, [movieId]);

  // const { profile_path, name } = cast;

  return (
    <ul
      style={{
        display: 'grid',
        maxWidth: 'calc(100vw - 48px)',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gridGap: '20px',
        marginTop: 0,
        marginBottom: 0,
        padding: '15px 0',
        listStyle: 'none',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {loading && <Loader />}
      {!loading &&
        cast.length > 0 &&
        cast.map(({ id, profile_path, name, character }) => (
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
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
              />
            )}
            {!profile_path && (
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png`}
                alt={name}
                
              />
            )}
            <div style={{
                padding: '4px 8px',
                color: 'white',
                textAlign: 'center',
                
              }}><p
              style={{                
                textTransform: 'uppercase',
              }}
            >
              {name}
            </p>
            <p style={{
                textSize: '10px',
              }}>({character})</p></div>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
