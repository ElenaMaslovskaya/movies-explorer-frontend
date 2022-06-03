import React from 'react';
import './MoviesCard.css';

export default function MoviesCard({
   card,
   onLike,
   onDelete,
   liked,
   savedPage }) {
   function handleLikeClick() {
      onLike(card);
   };

   function getTime(mins) {
      const hours = Math.trunc(mins / 60);
      const minutes = mins % 60;
      return `${hours}ч ${minutes}м`;
   }

   function handleDeleteClick() {
      onDelete(card);
   };

   return (
      <li className='movies-card'>
         <a
            className='movies-card__link'
            href={card.trailer || card.trailerLink}
            target='_blank'
            rel='noreferrer'>
            <img
               className='movies-card__image'
               src={card.image}
               alt='Фильм'
            />
         </a>
         <div className='movies-card__info'>
            <div>
               <h3 className='movies-card__title'>
                  {card.nameRU}
               </h3>
               <p className='movies-card__duration'>
                  {getTime(card.duration)}
               </p>
            </div>
            <button
               type='button'
               className={`${savedPage
                  ? 'movies-card__delete-button'
                  : ''}`}
               onClick={handleDeleteClick}
            />

            <button
               type='button'
               className={`${liked && !savedPage
                  ? 'movies-card__save-button_active'
                  : 'movies-card__save-button'}
                     `}
               onClick={handleLikeClick}
            />
         </div>
      </li>
   )
}
