import React from 'react';
import PropsTypes from 'prop-types';

function Movie({id, title, year, rating, summary, thumbnail}) {
  return (
    <div>
      <h3>title :{title}</h3>
      <span>year : {year}</span>
      <span> rating : {rating}</span>
      <span>summary : {summary}</span>
    </div>
  );
}

Movie.PropsTypes = {
  id :PropsTypes.number.isRequired,
  title : PropsTypes.string.isRequired,
  year : PropsTypes.number.isRequired,
  rating : PropsTypes.number.isRequired,
  summary : PropsTypes.string.isRequired,
  thumbnail: PropsTypes.string.isRequired
}

export default Movie;