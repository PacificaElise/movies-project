import React from 'react'

function Movie(props) {
	const { 
		Title: title, 
		Year: year, 
		imdbID: id, 
		Type: type, 
		Poster: poster } = props;

  return ( 
		<div id={id} className="card movie blue-grey darken-4 white-text">
			<div className="card-image waves-effect waves-block waves-light">
			{
				poster === 'N/A' ? (
					<img className="activator" src={`https://via.placeholder.com/300x450?text=${title}`} alt='poster not found' />
				) : (
					<img className="activator" src={poster} alt='poster' />	
				)
			}
			</div>
			<div className="card-content">
				<span className="card-title activator">{title}</span>
				<p>{year} <span className='right'>{type}</span> </p>
			</div>
	</div>
  )
}

export { Movie }