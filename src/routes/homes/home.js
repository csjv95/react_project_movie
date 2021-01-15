import React from 'react';
import axios from 'axios';
import Header from '../../componets/headers/header';
import Movie from '../../componets/movies/movie';
import './home.css';

class Home extends React.Component {
  state = {
    isLoding: true,
    movies : []
  };

  getMovies = async () => {
    const {
      data: { 
        data : {movies}
    }
  } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({movies, isLoding : false});
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoding, movies} = this.state;

    return (
    <main>
      <Header />
      <ul className='movies'>
       {isLoding 
       ? 'Loding...' 
       : movies.map(movie => (
        <Movie
          key = {movie.id}
          id={movie.id}
          title={movie.title} 
          year={movie.year} 
          rating={movie.rating} 
          summary={movie.summary} 
          thumbnail={movie.medium_cover_image}
          genres={movie.genres}
       />
      ))}
      </ul>
    </main>
    );
  }
}

export default Home;