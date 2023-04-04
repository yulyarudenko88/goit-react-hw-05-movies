import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { fetchMovieReviews } from 'services/api';
import Loader from 'components/Loader/Loader';
import { ReviewsList, ReviewsDoesNotExist, ReviewsListItem } from './MovieReviews.styled';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    const getMovieReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        // console.log(data);
        setReviews(data);
        setLoading(false);
      } catch (error) {
        toast.error(
          'Sorry for the inconvenience! Please try to use our service in a few minutes!'
        );
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!loading && reviews.length === 0 && (
        <ReviewsDoesNotExist>
          Sorry, there are no reviews yet...
        </ReviewsDoesNotExist>
      )}
      {!loading && reviews.length > 0 && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsListItem
              key={id}              
            >
              <h3>
                <FiCornerDownRight /> {author}
              </h3>
              <p>"{content}"</p>
            </ReviewsListItem>
          ))}
        </ReviewsList>
      )}
    </>
  );
};

export default MovieReviews;
