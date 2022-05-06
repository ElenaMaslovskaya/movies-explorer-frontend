import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Film from '../../images/film.png';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';

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
    id: 3,
    image: Film,
    nameRU: '33 слова о дизайне',
    duration: 40,
    isSaved: true,
  },
  {
    id: 4,
    image: Film,
    nameRU: '33 слова о дизайне',
    duration: 40,
    isSaved: false,
  },
  {
    id: 5,
    image: Film,
    nameRU: '33 слова о дизайне',
    duration: 40,
    isSaved: true,
  },
];

export default function App() {
  return (
    <div className='app'>

      <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
        <Header />
      </Route>

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path='/movies'>
          <Movies
            moviesCard={moviesCard}
          />
        </Route>

        <Route path='/signin'>
          <Login />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies
            moviesCard={moviesCard}
          />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>

      <Route exact path={['/', '/movies', '/saved-movies']}>
        <Footer />
      </Route>

    </div>
  )
}
