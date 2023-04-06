import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import { toast } from 'react-toastify';
import { fetchMoviesBySearch } from 'services/api';
import Loader from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const Movies = () => {
  const [searchWord, setSearchWord] = useState('');
  const [movies, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  console.log(location)

  useEffect(() => {
    if (query === '') return;
    setLoading(true);

    const getMoviesBySearch = async query => {
      try {
        const response = await fetchMoviesBySearch(query);
        console.log(response);

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

  // if (!movies) {
  //   return null;
  // }

  const handleChange = e => setSearchWord(e.target.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();

    if (!searchWord) {
      toast.warn('Sorry,we can not find it! Please try again!');
    }

    setSearchParams(searchWord !== '' ? { query: searchWord } : {});
    console.log(searchParams.get('query'));
    reset();
  };

  const reset = () => setSearchWord('');

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'inline-flex',
          gap: '4px',
          marginTop: '12px',
          marginLeft: '12px',
        }}
      >
        <input
          type="text"
          autoComplete="off"
          placeholder="Search movies..."
          name="input"
          value={searchWord}
          onChange={handleChange}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '12px',
            fontFamily: 'inherit',
            border: '1px solid rgb(80, 200, 120)',
            // borderColor: 'rgb(80, 200, 120)',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(80, 200, 120)',
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            fontFamily: 'inherit',
            borderRadius: '12px',
            padding: '10px 20px',
            border: 'none',
          }}
        >
          <VscSearch size={20} />{' '}
          <span style={{ marginLeft: '4px' }}>Search</span>
        </button>
      </form>
      <>
      {loading && <Loader />}      
      {!loading && movies.length > 0 && <MoviesGallery movies={movies} state={{state: location}}/>}
    </>
    </>
  );
};

export default Movies;
