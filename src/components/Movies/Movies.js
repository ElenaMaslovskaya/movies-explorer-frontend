import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi'

export default function Movies({
   SavedMoviesPage,
   SavedMoviesList,
   onLikeClick,
   onDeleteClick,
   isLoading }) {

   const checkboxState = localStorage.getItem('shortFilms') === 'on'
      ? 'on'
      : 'off';

   const [isMoviesLoading, setIsMoviesLoading] = useState(false);
   const [keyword, setKeyword] = useState('');
   const [shortFilms, setShortFilms] = useState(checkboxState);
   const [filteredMovies, setFilteredMovies] = useState([]);
   const [allMovies, setAllMovies] = useState([]);
   const [isError, setIsError] = useState(false);

   function filterOnDuration(movies) {
      return movies.filter((item) => item.duration < 40);
   };

   useEffect(() => {
      const array = JSON.parse(localStorage.getItem('movies'));
      if (array && !keyword) {
         setShortFilms(localStorage.getItem('shortFilms'));
         setFilteredMovies(shortFilms === 'on'
            ? filterOnDuration(array)
            : array);
      }
   }, [shortFilms, keyword])

   function filterOnWord(movies, searchQuery, shortFilms) {
      const moviesByQuery = movies.filter((item) => {
         const strRu = String(item.nameRU).toLowerCase();
         const strEn = String(item.nameEN).toLowerCase();
         const searchStr = searchQuery.toLowerCase().trim();
         return (strRu.indexOf(searchStr) !== -1 || strEn.indexOf(searchStr) !== -1);
      });

      if (shortFilms === true) {
         return filterOnDuration(moviesByQuery);
      }
      return moviesByQuery;
   };

   function customizeImagesUrl(movies) {
      movies.forEach(movie => {
         if (movie.image) {
            movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
            movie.image = `https://api.nomoreparties.co${movie.image.url}`
         } else {
            movie.image = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80';
            movie.thumbnail = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80'
         }
      });
   };

   useEffect(() => {
      if (keyword) {
         const array = filterOnWord(allMovies, keyword, shortFilms);
         setFilteredMovies(array);
      }
   }, [keyword, shortFilms, allMovies])

   function handleSetFilteredMovies(movies, query, checkbox) {
      const moviesList = filterOnWord(movies, query);
      setFilteredMovies(checkbox === 'on'
         ? filterOnDuration(moviesList)
         : moviesList);
      localStorage.setItem('movies', JSON.stringify(moviesList));
   }

   function handleSearchSubmit(value) {
      setIsMoviesLoading(true);
      setKeyword(value);
      localStorage.setItem('keyword', value);
      localStorage.setItem('shortFilms', shortFilms);

      if (!allMovies.length) {
         moviesApi.getAllMovies()
            .then((data) => {
               customizeImagesUrl(data);
               setAllMovies(data);
               handleSetFilteredMovies(data, value, shortFilms);
            })
            .catch((err) => {
               setIsError(true);
               console.log(err);
            })
            .finally(() => setIsMoviesLoading(false))
      } else {
         handleSetFilteredMovies(allMovies, value, shortFilms);
         setIsMoviesLoading(false);
      }
   }

   function handleShortFilms(e) {
      setShortFilms(e.target.value);
      localStorage.setItem('shortFilms', e.target.value);
   }
   return (
      <section className='movies'>
         <SearchForm
            onSearchClick={handleSearchSubmit}
            onCheckbox={handleShortFilms}
            shortFilms={shortFilms}
         />
         {
            isLoading ? <Preloader /> : (
               <MoviesCardList
               isLoading={isMoviesLoading}
               list={filteredMovies}
               SavedMoviesPage={SavedMoviesPage}
               isError={isError}
               SavedMoviesList={SavedMoviesList}
               onLikeClick={onLikeClick}
               onDeleteClick={onDeleteClick}
               />
            )}
      </section>
   )
}
