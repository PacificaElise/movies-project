import React, { useState } from 'react';

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className='row'>
      <div className='input-field inline'>
        <input
          className='validate'
          placeholder='Search...'
          type='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <span
          className='helper-text white-text'
          data-error='wrong'
          data-success='right'
        >
          Helper text
        </span>
      </div>
      <button
        className='buttonSearch'
        onClick={() => searchMovies(search, type)}
      >
        <img
          className='search'
          src='https://cdn-icons-png.flaticon.com/512/3810/3810856.png'
          alt='search'
        ></img>
      </button>
      <div>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='all'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='movie'
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='series'
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export { Search };
