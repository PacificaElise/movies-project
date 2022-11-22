import { React, useState, useEffect } from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=95bb1ee0&s=matrix')
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);

  const searchMovies = (str, type = 'all') => {
    fetch(
      `http://www.omdbapi.com/?apikey=95bb1ee0&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  };

  return (
    <main className='container content'>
      <Search searchMovies={searchMovies} />
      {movies.length ? <MovieList movies={movies} /> : <Preloader />}
    </main>
  );
}

export { Main };
