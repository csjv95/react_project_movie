import React from 'react';
import axios from 'axios';
import Movie from './Movie'

class App extends React.Component {
  state = {
    isLoding: true,
    movies : []
  };

  getMovies = async () => {
    const {data: { 
      data : 
      {movies}
    }} = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({movies, isLoding : false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoding, movies} = this.state;

    return (
     <div>
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
          thumbnail={movie.thumbnail} 
       />
     ))}
     </div>
    );
  }
}

export default App;
