import { useMovie } from '../hooks/useMovie';

interface HeaderProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;  }
  };

export function Header(){

  const { selectedGenre } = useMovie();

  return(
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
  )
}