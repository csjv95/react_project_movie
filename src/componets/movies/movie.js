import React from 'react';
import PropsTypes from 'prop-types';
import './movie.css';

function Movie({title, year, rating, summary, thumbnail, genres}) {
  return (
    <li className='movie'>
      <img className='thumbnail' src={thumbnail} title={title} alt='thumbnail'>{console.log(thumbnail)}</img>
      <div className='movie_data'>
        <h2 className='movie_title'>Title : {title}</h2>
        <div className='movie_year'>year : {year}</div>
        <div className='movie_rating'> rating : {rating}</div>
        <p className='movie_summary'>summary : {summary.slice(0,150)}...</p>
      </div>
    </li>
  );
}

Movie.PropsTypes = {
  title : PropsTypes.string.isRequired,
  year : PropsTypes.number.isRequired,
  rating : PropsTypes.number.isRequired,
  summary : PropsTypes.string.isRequired,
  thumbnail: PropsTypes.string.isRequired,
  genres : PropsTypes.arrayOf(PropsTypes.string).isRequired
}

export default Movie;