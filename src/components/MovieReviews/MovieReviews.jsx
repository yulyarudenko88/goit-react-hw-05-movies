import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiCornerDownRight } from "react-icons/fi";

import { fetchMovieReviews } from 'services/api';
import Loader from 'components/Loader/Loader';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    setLoading(true);

    const getMovieReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        console.log(data);
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.log(error.messages);
      }
    };
    getMovieReviews();
  }, [movieId]);

  // const { profile_path, name } = cast;

  return (
    <ul
      style={{
        
        maxWidth: 'calc(100vw - 48px)',
        
        
        padding: '15px 0',
        listStyle: 'none',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {loading && <Loader />}
      {!loading &&
        reviews.length > 0 &&
        reviews.map(({ id, author, content }) => (
          <li
            key={id}
            style={{marginBottom: "8px",
              padding: '4px 8px',
              border: '2px solid rgb(80, 200, 120',
              boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2)',
            }}
          >
            
            <h3><FiCornerDownRight/>  {author}</h3>
            <p>"{content}"</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieReviews;
