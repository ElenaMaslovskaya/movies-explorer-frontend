import React from 'react';
import './MoviesCard.css';
import { calcTime } from '../../utils/utils';

export default function MoviesCard({
   card,
   onLike,
   onDelete,
   liked,
   savedPage }) {
   function handleLikeClick() {
      onLike(card);
   };

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
                  {calcTime(card.duration)}
               </p>
            </div>

            <button
               className={`${savedPage ? 'movies-card__delete-button' : 'movies-card__save-button'} 
               ${liked && !savedPage ? 'movies-card__save-button_active' : ''}`}
               type='button'
               onClick={savedPage || liked ? handleDeleteClick : handleLikeClick}
            />
         </div>
      </li>
   )
}
