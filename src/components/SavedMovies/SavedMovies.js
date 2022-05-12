import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

export default function SavedMovies(props) {
   return (
      <section className='saved-movies'>
         <SearchForm />
         <MoviesCardList 
            moviesCard={props.moviesCard}
         />
      </section>
   )
}
