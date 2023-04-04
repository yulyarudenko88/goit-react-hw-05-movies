import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import { fetchMoviesBySearch } from 'services/api';
// import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchWord, setSearchWord] = useState('');
  // const [movie, setMovie] = useState({});
  // const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    // setLoading(true);

    const getMovieById = async query => {
      try {
        const response = await fetchMoviesBySearch(query);

        console.log(response);
        // setMovie(response);
        // setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieById(query);
  }, [query]);

  // const updateQueryString = (query) => {
  //   const nextParams = query !== "" ? { query } : {};
  //   setSearchParams(nextParams);
  // };
  // useEffect(() => {
  //   if (!inputParam) {
  //     return;
  //   }
  //   async function fetch() {
  //     try {
  //       const { results } = await fetchSearchApi(inputParam);
  //       if (results.length < 1) {
  //         Notiflix.Notify.warning("We can't find it, try again");
  //       }
  //       setMovies(results);
  //     } catch (error) {
  //       Notiflix.Notify.warning('Something wrong, try again please');
  //     }
  //   }
  //   fetch();
  // }, [inputParam]);

  // const onSubmit = e => {
  //   if (!input) {
  //     Notiflix.Notify.warning('Please fill in the gap');
  //   }
  //   e.preventDefault();
  //   setSearchParams(input !== '' ? { filter: input } : {});
  //   setInput('');
  // };

  // const onChangeInput = value => {
  //   setInput(value);
  // };

  // if (!movies) {
  //   return null;
  // }

  const handleChange = e => setSearchWord(e.target.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(searchWord !== '' ? { query: searchWord } : {});
    reset();
  };

  const reset = () => setSearchWord('');

  return (
    <>
      <form onSubmit={handleSubmit} style={{
  display: 'inline-flex',
  gap: '4px',
  marginTop: '12px',
  marginLeft: '12px',
}}>
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
            outline: 'none'
          }}
        />
        <button type="submit" style={{
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
  }}>
          <VscSearch size={20} /> <span style={{ marginLeft: '4px' }}>Search</span>
        </button>
      </form>
    </>
  );
};

export default Movies;
