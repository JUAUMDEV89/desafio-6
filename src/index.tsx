import { render } from 'react-dom'

import { App } from './App'

import { MovieProvider } from './context/moviesContext';

render(
    <MovieProvider>
        <App />
    </MovieProvider>
    , document.getElementById('root'))