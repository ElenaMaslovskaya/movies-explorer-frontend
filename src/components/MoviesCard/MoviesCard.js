import React from 'react';
import './MoviesCard.css';

export default function MoviesCard({
   moviesCard,
   location,
   handleDeleteMovie,
   handleSaveMovie,
   saved
}) {

   function saveMovie() {
      handleSaveMovie(moviesCard);
   }

   function deleteMovie() {
      let checkLocation = false;
      if (location.pathname === '/saved-movies') {
         checkLocation = true;
      }
      handleDeleteMovie(moviesCard, checkLocation);
   }

   function onTrailerLink() {
      window.open(moviesCard.trailerLink, '_blank');
   }

   return (
      <li className='movies-card'>
         <img
            className='movies-card__image'
            src={moviesCard.image.url
               ? `https://api.nomoreparties.co/${moviesCard.image.url}`
               : moviesCard.image}
            alt='Фильм'
            onClick={onTrailerLink}
         />
         <div className='movies-card__info'>
            <div>
               <h3 className='movies-card__title'>
                  {moviesCard.nameRU}
               </h3>
               <p className='movies-card__duration'>
                  {moviesCard.duration}
                  {''}
                  минут
               </p>
            </div>
            {location.pathname === '/saved-movies'
               && (
                  <button
                     className='movies-card__delete-button'
                     onClick={deleteMovie}
                  />
               )}
            {location.pathname === '/movies'
               && (
                  <button
                     className={saved
                        ? 'movies-card__save-button_active'
                        : 'movies-card__save-button'
                     }
                     onClick={saveMovie}
                  />
               )}
         </div>
      </li>
   )
}
