import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from 'services/api';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        console.log(data);
        setPopularMovies(data);
      } catch (error) {
        console.log(error.messages);
      }
    };
    getPopularMovies();
  }, []);

  return (
    <ul
      style={{
        display: 'grid',
        maxWidth: 'calc(100vw - 48px)',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: '20px',
        marginTop: 0,
        marginBottom: 0,
        padding: '15px 0',
        listStyle: 'none',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {popularMovies.map(({ id, title, poster_path, overview }) => (
        <li key={id} style={{  backgroundColor: '#50c878',      
                border: '1px #102818',
                borderRadius: '5px',
                boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2)', overflow: 'hidden'
              }}>
          <Link to={`movies/${id}`} style={{cursor: 'pointer', textDecoration: 'none' }}>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={overview}
              style={{ display: 'block', width: '100%' }}
            />
            <p
              style={{
                padding: '4px 8px',
                color: 'white',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}
            >
              {title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
