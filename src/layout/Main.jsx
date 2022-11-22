import { React, useState, useEffect } from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=95bb1ee0&s=matrix')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=95bb1ee0&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
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
