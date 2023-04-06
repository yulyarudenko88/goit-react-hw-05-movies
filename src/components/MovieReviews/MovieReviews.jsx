import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { fetchMovieReviews } from 'services/api';
import {
  ReviewsList,
  ReviewsDoesNotExist,
  ReviewsListItem,
} from './MovieReviews.styled';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);

        setReviews(data);
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
      {reviews.length === 0 && (
        <ReviewsDoesNotExist>
          Sorry, there are no reviews yet...
        </ReviewsDoesNotExist>
      )}
      {reviews.length > 0 && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsListItem key={id}>
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
