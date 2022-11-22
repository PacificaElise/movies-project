import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className='row'>
        <div className='input-field inline'>
          <input
            className='validate'
            placeholder='Search...'
            type='search'
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
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
          onClick={() =>
            this.props.searchMovies(this.state.search, this.state.type)
          }
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
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
