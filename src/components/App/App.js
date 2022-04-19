import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Film from '../../images/film.png';

export default function App() {

const moviesCard = [
  {
    id: 1,
    image: Film,
    nameRU: '33 слова о дизайне',
    duration: 30,
    isSaved: true,
  },
  {
    id: 2,
    image: Film,
    nameRU: '33 слова о дизайне',
    duration: 20,
    isSaved: false,
  },
  {
    id: 1,
    image: Film,
    nameRU: '33 слова о дизайне',
    duration: 40,
    isSaved: true,
  },
];

  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies
            moviesCard={moviesCard}
          />
        </Route>
      </Switch>
    </div>
  )
}
