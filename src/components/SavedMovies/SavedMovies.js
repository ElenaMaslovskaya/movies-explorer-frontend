import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { searchOnKeyword, filterByDuration } from '../../utils/utils';

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

   useEffect(() => {
      const arr = searchOnKeyword(SavedMoviesList, keyword, shortFilms);
      setFilteredMovies(shortFilms === 'on'
         ? filterByDuration(arr)
         : arr);
   }, [keyword, shortFilms, SavedMoviesList]);

   function handleSearchSubmit(value) {
      setKeyword(value);
      const resultList = searchOnKeyword(SavedMoviesList, keyword, shortFilms);
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
