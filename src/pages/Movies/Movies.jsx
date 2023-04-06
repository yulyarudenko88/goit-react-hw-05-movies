import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import { toast } from 'react-toastify';
import { fetchMoviesBySearch } from 'services/api';
import Loader from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { SearchForm, Input, SubmitBtn } from './Movies.styled';
const Movies = () => {
  const [searchWord, setSearchWord] = useState('');
  const [movies, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    setLoading(true);

    const getMoviesBySearch = async query => {
      try {
        const response = await fetchMoviesBySearch(query);

        if (response.length < 1) {
          toast.warn('Sorry,we can not find it! Please try again!');
        }

        setMovie(response);
        setLoading(false);
      } catch (error) {
        toast.error(
          'Sorry for the inconvenience! Please try to use our service in a few minutes!'
        );
      }
    };
    getMoviesBySearch(query);
  }, [query]);

  const handleChange = e => setSearchWord(e.target.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();

    if (!searchWord) {
      toast.warn('Sorry,we can not find it! Please try again!');
    }

    setSearchParams(searchWord !== '' ? { query: searchWord } : {});
    reset();
  };

  const reset = () => setSearchWord('');

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Search movies..."
          name="input"
          value={searchWord}
          onChange={handleChange}
        />
        <SubmitBtn type="submit">
          <VscSearch size={20} />{' '}
          <span style={{ marginLeft: '4px' }}>Search</span>
        </SubmitBtn>
      </SearchForm>
      <>
        {loading && <Loader />}
        {!loading && movies.length > 0 && (
          <MoviesGallery movies={movies} pathTo={''} />
        )}
      </>
    </>
  );
};

export default Movies;
