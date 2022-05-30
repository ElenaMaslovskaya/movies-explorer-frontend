import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React, { useState } from 'react';

export default function MoviesCardList({
   moviesCard,
   location,
   width,
   handleDeleteMovie,
   handleSaveMovie,
   isSavedMovie,
   moviesMessage
}) {


   const [renderedCardsCount, setRenderedCardsCount] = useState(0);
   const [addedCardsCount, setAddedCardsCount] = useState(0);

   function cardsCount() {
      if (width >= 768) {
         setRenderedCardsCount(7);
         setAddedCardsCount(7);
      } else {
         setRenderedCardsCount(5);
         setAddedCardsCount(5);
      }
   }

   React.useEffect(() => {
      cardsCount();
   }, [width]);

   function handleMoreFilmsClick() {
      let count = 0;
      count += 1;
      setRenderedCardsCount(renderedCardsCount + addedCardsCount * count);
   }

   return (
      <section className='movies-cardlist'>
         <ul className='movies-cardlist__items'>
            {moviesCard
               .slice(0, location.pathname === '/saved-movies'
                  ? moviesCard.length
                  : renderedCardsCount)
               .map((card) => (
                  <MoviesCard
                     key={card.id
                        ? card.id
                        : card.movieId}
                     moviesCard={card}
                     saved={isSavedMovie}
                     handleSaveMovie={handleSaveMovie}
                     handleDeleteMovie={handleDeleteMovie}
                     location={location}
                  />
               ))
               }
         </ul>
         {
            (moviesMessage)
               ? <p>{moviesMessage}</p>
               : ''
         }
         {
            (renderedCardsCount < moviesCard.length && location.pathname === '/movies')
            && (
               <button
                  className='movies-cardlist__button'
                  onClick={handleMoreFilmsClick}
               >
                  Ещё
               </button>
            )}
      </section>
   );
}
