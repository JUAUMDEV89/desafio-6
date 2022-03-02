import { useContext } from 'react';
import { MoviesContext } from '../context/moviesContext';

export function useMovie(){

    const { 
        genres,
        handleClickButton,
        movies,
        selectedGenre,
        selectedGenreId
     } = useContext(MoviesContext);

    return{
        genres,
        handleClickButton,
        movies,
        selectedGenre,
        selectedGenreId
    }
}