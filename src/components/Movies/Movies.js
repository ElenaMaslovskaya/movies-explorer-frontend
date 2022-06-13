import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import React, { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { refererImageUrl } from '../../utils/utils';
import { filterByDuration } from '../../utils/utils';
import { searchOnKeyword } from '../../utils/utils';

export default function Movies({
   SavedMoviesPage,
   SavedMoviesList,
   onLikeClick,
   onDeleteClick }) {

   const checkboxState = localStorage.getItem('shortFilms') === 'on'
      ? 'on'
      : 'off';

   const [isMoviesLoading, setIsMoviesLoading] = useState(false);
   const [keyword, setKeyword] = useState('');
   const [shortFilms, setShortFilms] = useState(checkboxState);
   const [filteredMovies, setFilteredMovies] = useState([]);
   const [allMovies, setAllMovies] = useState([]);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      const array = JSON.parse(localStorage.getItem('movies'));
      if (array && !keyword) {
         setShortFilms(localStorage.getItem('shortFilms'));
         setFilteredMovies(shortFilms === 'on'
            ? filterByDuration(array)
            : array);
      };
   }, [shortFilms, keyword])

   useEffect(() => {
      if (keyword) {
         const array = searchOnKeyword(allMovies, keyword, shortFilms);
         setFilteredMovies(array);
      }
   }, [keyword, shortFilms, allMovies])

   function handleSetFilteredMovies(movies, query, checkbox) {
      const moviesList = searchOnKeyword(movies, query);
      setFilteredMovies(checkbox === 'on'
         ? filterByDuration(moviesList)
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
               refererImageUrl(data);
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
         <MoviesCardList
            isLoading={isMoviesLoading}
            list={filteredMovies}
            SavedMoviesPage={SavedMoviesPage}
            isError={isError}
            SavedMoviesList={SavedMoviesList}
            onLikeClick={onLikeClick}
            onDeleteClick={onDeleteClick}
         />
      </section>
   )
}
