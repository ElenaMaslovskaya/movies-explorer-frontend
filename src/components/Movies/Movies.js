import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import React from 'react';

export default function Movies({
   moviesCard,
   width,
   handleSaveMovie,
   isSavedMovie,
   moviesMassage
}) {
   return (
      <section className='movies'>
         <SearchForm />
         <MoviesCardList 
            moviesCard={moviesCard}
            width={width}
            handleSaveMovie={handleSaveMovie}
            isSavedMovie={isSavedMovie}
            moviesMessage={moviesMassage}
         />
      </section>
   )
}
