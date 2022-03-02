import { useContext } from 'react';
import { MovieCard } from "./MovieCard";
import { Header } from  './Header';
import { MoviesContext } from '../context/moviesContext';

export function Content() {

  const { movies } = useContext(MoviesContext);

  return (
    <div className="container">
      <Header />

      <main>
        <div className="movies-list">
          {movies.map(movie => ( 
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />        
          ))}
        </div>
      </main>
    </div>
  )
}