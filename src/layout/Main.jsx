import { React, useState, useEffect } from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=titanic`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <main className='container content'>
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <MovieList movies={movies} />}
    </main>
  );
}

export { Main };
