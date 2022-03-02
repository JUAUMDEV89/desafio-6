import { createContext, ReactNode, useState, useEffect, useCallback , useMemo} from 'react';
import { api } from '../services/api';

interface MoviesContextProps{
    selectedGenreId: number;
    genres: Array<GenreResponseProps>;
    movies: Array<MovieProps>;
    selectedGenre: {};
    handleClickButton: (id: number)=>void;
}

interface MovieProviderProps{
   children: ReactNode
}

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}
  
interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
}

export const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

export function MovieProvider({ children }: MovieProviderProps){

    const [selectedGenreId, setSelectedGenreId] = useState(1);
    const [genres, setGenres] = useState<GenreResponseProps[]>([]);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
    const handleClickButton = useCallback((id: number)=>{
     setSelectedGenreId(id);
    }, [])

  useEffect(() => {
   useMemo(()=>{
     return  api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
   }, [genres])
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
      console.log(response.data)
  });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


   return <MoviesContext.Provider value={{ selectedGenreId, genres, movies, selectedGenre, handleClickButton }}>
        { children }
   </MoviesContext.Provider>
}

