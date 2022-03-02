import { useContext } from 'react';

import { MoviesContext } from './context/moviesContext';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
 
  const { genres, movies, selectedGenreId, selectedGenre, handleClickButton } = useContext(MoviesContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar/>

      <Content />
    </div>
  )
}