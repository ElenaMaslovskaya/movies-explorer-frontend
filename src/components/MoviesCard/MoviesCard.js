import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export default function MoviesCard({ moviesCard }) {
   const location = useLocation;
   const [isSavedMovies, setIsSavedMovies] = React.useState(false);

   React.useEffect(() => {
      if (location.pathname === '/saved-movies') {
         setIsSavedMovies(true);
      }
   }, [location.pathname]);

   return (
      <div className='movies-card'>
         <img className='movies-card__image' src={moviesCard.image} alt='Фильм' />
         <div className='movies-card__info'>
            <div>
            <h3 className='movies-card__title'>{moviesCard.nameRU}</h3>
            <p className='movies-card__duration'>
               {moviesCard.duration}
               {''}
               минут
            </p>
            </div>
            <button className={
               `${!moviesCard.isSaved 
               ? 'movies-card__save-button' 
               : 'movies-card__save-button_activ'}
               ${isSavedMovies 
               ? ' movies-card__delete-button'
               : ''}`}>
            </button>
         </div>
      </div>
   )
}
