import React from 'react'
import { Movie } from './Movie'

function MovieList(props) {
	const { movies } = props;

	return (
		<div className='movieList'>
			{movies.map(movie => (
				<Movie key={movie.imdbID} {...movie}/>
			))}
		</div>
)
}

export { MovieList }