import { useContext } from 'react';
import { MoviesContext } from '../context/moviesContext';

interface HeaderProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;  }
  };

export function Header(){

  const { selectedGenre } = useContext(MoviesContext);

  return(
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
  )
}