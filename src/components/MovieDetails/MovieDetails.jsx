import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieById } from 'services/api';
import Loader from 'components/Loader/Loader';
import {
  MovieDetailsWrapper,
  PosterImage,
  MovieDetailsContent,
  AdditionalInfoWrapper,
  AdditionalInfoLink,
} from './MovieDetails.styled';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state ?? '/');

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        const response = await fetchMovieById(movieId);

        setMovie(response);
      } catch (error) {
        toast.error(
          'Sorry for the inconvenience! Please try to use our service in a few minutes!'
        );
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  const {
    poster_path,
    tagline,
    title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;
  let posterPath = '';

  if (poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
  } else {
    posterPath =
      'https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png';
  }

  return (
    <>
      <ButtonGoBack to={backLinkLocation.current} />
      {movie !== {} && (
        <>
          <MovieDetailsWrapper>
            <PosterImage src={posterPath} alt={tagline} />
            <MovieDetailsContent>
              <h1>
                "{title}" ({new Date(release_date).getFullYear()})
              </h1>
              <p>User score: {Math.round(vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <div>
                <h3>Genres</h3>
                <ul>
                  {genres?.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </MovieDetailsContent>
          </MovieDetailsWrapper>

          <AdditionalInfoWrapper>
            <h2>Additional information</h2>
            <ul>
              <li>
                <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
              </li>
              <li>
                <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
              </li>
            </ul>
          </AdditionalInfoWrapper>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
export default MovieDetails;
