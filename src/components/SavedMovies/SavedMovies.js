import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

export default function SavedMovies({
   SavedMoviesPage,
   SavedMoviesList,
   isLoading,
   isErrorMovies,
   onDeleteClick
}) {

   const [keyword, setKeyword] = React.useState('');
   const [shortFilms, setShortFilms] = React.useState('off');
   const [filteredMovies, setFilteredMovies] = React.useState(SavedMoviesList);

   function filterOnDuration(movies) {
      return movies.filter((item) => item.duration < 40);
   };

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

   useEffect(() => {
      const arr = filterOnWord(SavedMoviesList, keyword, shortFilms);
      setFilteredMovies(shortFilms === 'on'
         ? filterOnDuration(arr)
         : arr);
   }, [keyword, shortFilms, SavedMoviesList]);

   function handleSearchSubmit(value) {
      setKeyword(value);
      const resultList = filterOnWord(SavedMoviesList, keyword, shortFilms);
      setFilteredMovies(resultList);
   };

   function handleShortFilms(e) {
      setShortFilms(e.target.value);
   };

   return (
      <section className='saved-movies'>
         <SearchForm
            onSearchClick={handleSearchSubmit}
            onCheckbox={handleShortFilms}
            shortFilms={shortFilms}
            savedMoviesPage={true}
         />
         <MoviesCardList
            isLoading={isLoading}
            list={filteredMovies}
            SavedMoviesPage={SavedMoviesPage}
            onDeleteClick={onDeleteClick}
            isError={isErrorMovies}
         />
      </section>
   )
}
