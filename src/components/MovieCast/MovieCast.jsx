import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieCast } from 'services/api';
import {
  CastList,
  CastListItem,
  ItemInfoWrapper,
  ItemInfoName,
  ItemInfoCharacter,
} from './MovieCast.styled';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);

        setCast(data.cast);
      } catch (error) {
        toast.error(
          'Sorry for the inconvenience! Please try to use our service in a few minutes!'
        );
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && (
        <CastList>
          {cast.map(({ id, profile_path, name, character }) => {
            let profilePath = '';

            if (profile_path) {
              profilePath = `https://image.tmdb.org/t/p/w200${profile_path}`;
            } else {
              profilePath =
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
            }

            return (
              <CastListItem key={id}>
                <img src={profilePath} alt={name} />
                <ItemInfoWrapper>
                  <ItemInfoName>{name}</ItemInfoName>
                  <ItemInfoCharacter>{character}</ItemInfoCharacter>
                </ItemInfoWrapper>
              </CastListItem>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default MovieCast;
