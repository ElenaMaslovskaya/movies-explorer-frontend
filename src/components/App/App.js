import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import { useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

export default function App() {

  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesCard, setMoviesCard] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [moviesMessage, setMoviesMessage] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [shortMoviesFilter, setShortMoviesFilter] = useState(0);
  const [savedShortMoviesFilter, setSavedShortMoviesFilter] = useState(0);
  const [errorSearch, setErrorSearch] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [searchFilterSavedMovies, setSearchFilterSavedMovies] = useState('');

  function saveInLocalStorage(films, savedMoviesSaving = false) {
    const paramsToSave = {
      moviesCard: films,
      searchFilter: savedMoviesSaving
        ? searchFilterSavedMovies
        : searchFilter,
      shortMoviesFilter: savedMoviesSaving
        ? savedShortMoviesFilter
        : shortMoviesFilter,
    };
    localStorage.setItem(savedMoviesSaving
      ? 'savedMovies'
      : 'movies',
      JSON.stringify(paramsToSave));
  }

  function handleSaveMovie() {
    console.log('save');
  }

  function handleDeleteMovie() {
    console.log('delete');
  }

  function updateWidth() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  function isSavedMovie(id) {
    const result = savedMovies.some((m) => m.movieId === id);
    return result;
  }

  function checkLengthMoviesList(filteredMovies) {
    if (filteredMovies.length === 0) {
      setMoviesMessage('Ничего не найдено');
    } else {
      setMoviesMessage('');
    }
  }

  function filterMovies() {
    let filteredMovies = [];
    if (searchFilter) {
      setIsLoading(true);
      filteredMovies = moviesCard.filter((card) =>
        card.nameRu.toLowerCase()
          .includes(searchFilter.toLowerCase())
        && (shortMoviesFilter
          ? card.duration <= 40
          : card.duration > 40));

      checkLengthMoviesList(filteredMovies);
      setTimeout(() => { setIsLoading(false) }, 1500);
      setMoviesList(filteredMovies);
      saveInLocalStorage(filteredMovies);
      setErrorSearch('');
      return moviesList;
    }

    setErrorSearch('Введите ключевое слово');
    return [];
  }

  function filterSavedMovies() {
    let filteredMovies = [];
    if (searchFilterSavedMovies) {
      setIsLoading(true);
      filteredMovies = savedMovies.filter((card) =>
        card.nameRu.toLowerCase()
          .includes(searchFilterSavedMovies.toLowerCase())
        && (savedShortMoviesFilter
          ? card.duration <= 40
          : card.duration > 40));

      checkLengthMoviesList(filteredMovies);
      setTimeout(() => { setIsLoading(false) }, 1500);
      setSavedMoviesList(filteredMovies);
      saveInLocalStorage(filteredMovies);
      setErrorSearch('');
      return savedMoviesList;
    }

    setErrorSearch('Введите ключевое слово');
    return [];
  }

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

        <Route path='/signin'>
          <Login />
        </Route>


        <ProtectedRoute
          exact
          path='/movies'
          component={Movies}
          isLoading={isLoading}
          loggedIn={loggedIn}
          width={width}
          moviesList={moviesList}
          handleSaveMovie={handleSaveMovie}
          handleFilterMovies={setSearchFilter}
          handleFilterShortMovies={setShortMoviesFilter}
          shortMoviesFilter={shortMoviesFilter}
          isSavedMovie={isSavedMovie}
          searchMovie={searchFilter}
          filterMovies={filterMovies}
          moviesMessage={moviesMessage}
          errorSearch={errorSearch}
        />

        <Route path="/saved-movies">
          <SavedMovies
            moviesCard={moviesCard}
          />
        </Route>

        <Route path='/profile'>
          <Profile />
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
