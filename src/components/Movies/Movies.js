import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import React from 'react';

export default function Movies(props) {
   return (
      <section className='movies'>
         <SearchForm />
         <MoviesCardList 
            moviesCard={props.moviesCard}
         />
      </section>
   )
}
