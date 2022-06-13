import React, { useEffect, useState } from 'react';
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
import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import auth from '../../utils/Auth';
import api from '../../utils/MainApi';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { withRouter } from 'react-router-dom';

function App() {

  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isErrorState, setIsErrorState] = useState(false);
  const [isErrorMovies, setIsErrorMovies] = useState(true);
  const [isPopupOpen, setIsPopupOpened] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [userMovies, setUserMovies] = useState([]);

  function getAuthStatus() {
    setLoggedIn(true);
  }

  function checkToken() {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      setIsLoading(true);
      getAuthStatus();
      Promise.all([auth.getData(token), api.getUserMovies(token)])
        .then(([userInfo, movies]) => {
          if (userInfo) {
            setCurrentUser(userInfo.data);
            setUserMovies(movies.data);
            setIsErrorMovies(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsErrorState(true);
          setErrorMessage(err.message);
          setIsPopupOpened(true);
          setIsErrorMovies(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  function closePopup() {
    setIsPopupOpened(false);
  }

  function handleRegister(name, email, password) {
    setIsLoading(true);
    console.log(name, email, password)
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setIsErrorState(true);
        setErrorMessage(err.message);
        setIsPopupOpened(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    auth
      .login(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        getAuthStatus();
        history.push('/movies');
        checkToken();
      })
      .catch((err) => {
        setIsErrorState(true);
        setErrorMessage(err.message);
        setIsPopupOpened(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    history.push('/');
    console.log('это я');
  };

  function handleUpdateUser(name, email) {
    api
      .updateUserInfo(name, email)
      .then(data => {
        setCurrentUser(data);
        setIsErrorState(false);
        setErrorMessage("Обновление прошло успешно");
        setIsPopupOpened(true);
      })
      .catch((err) => {
        setIsErrorState(true);
        setErrorMessage(err.message);
        setIsPopupOpened(true);
      });
  }

  function handleSaveMovie(movie) {
    const token = localStorage.getItem('jwt');
    api
      .saveUserMovie(movie, token)
      .then(newCard => {
        setUserMovies([newCard, ...userMovies]);
      })
      .catch((err) => {
        setIsErrorState(true);
        setErrorMessage(err.message);
        setIsPopupOpened(true);
      });
  }

  function handleDeleteMovie(movie) {
    const token = localStorage.getItem('jwt');
    api
      .deleteMovie(movie._id, token)
      .then((res) => {
        setUserMovies((movies) => movies.filter(function (item) {
          return item._id !== movie._id;
        }));
      })
      .catch((err) => {
        setIsErrorState(true);
        setErrorMessage(err.message);
        setIsPopupOpened(true);
      });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Route
              exact
              path={['/', '/movies', '/saved-movies', '/profile']}
            >
              <Header
                loggedIn={loggedIn}
              />
            </Route>

            <Switch>

              <ProtectedRoute
                exact
                path='/movies'
                loggedIn={loggedIn}
                component={Movies}
                SavedMoviesPage={false}
                SavedMoviesList={userMovies}
                onLikeClick={handleSaveMovie}
                onDeleteClick={handleDeleteMovie}
              />

              <ProtectedRoute
                exact
                path='/saved-movies'
                loggedIn={loggedIn}
                component={SavedMovies}
                SavedMoviesPage={true}
                SavedMoviesList={userMovies}
                isLoading={isLoading}
                isErrorMovies={isErrorMovies}
                onDeleteClick={handleDeleteMovie}
              />
              <ProtectedRoute
                exact
                path='/profile'
                loggedIn={loggedIn}
                component={Profile}
                handleLogOut={handleLogOut}
                handleUpdateUser={handleUpdateUser}
                isErrorState={isErrorState}
              />
              <Route
                exact
                path='/'>
                <Main />
              </Route>

              <Route
                path='/signup'>
                <Register
                  loggedIn={loggedIn}
                  onSubmit={handleRegister}
                />
              </Route>

              <Route
                path='/signin'>
                <Login
                  loggedIn={loggedIn}
                  onSubmit={handleLogin}
                />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>

            </Switch>

            <Popup
              isErrorState={isErrorState}
              isOpen={isPopupOpen}
              message={errorMessage} onClose={closePopup}
            />

            <Route
              exact
              path={['/', '/movies', '/saved-movies']}
            >
              <Footer />
            </Route>
          </>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);