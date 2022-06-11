import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React, { useEffect, useState } from 'react';
import useWidth from '../../hooks/useWidth';
import Preloader from '../Preloader/Preloader';
import {
   ADDED_CARD_COUNT_DESCTOP, RENDERED_CARD_COUNT_DESCTOP,
   ADDED_CARD_COUNT_MOBILE, RENDERED_CARD_COUNT_MOBILE,
} from '../../utils/consts';

export default function MoviesCardList({
   isLoading,
   list,
   SavedMoviesPage,
   isError,
   onLikeClick,
   onDeleteClick,
   SavedMoviesList
}) {

   const width = useWidth();
   const [showList, setShowList] = useState([]);
   const [renderedCardsCount, setRenderedCardsCount] = useState({ rendered: 0, added: 0 });

   useEffect(() => {
      if (width >= 768) {
         setRenderedCardsCount({ RENDERED_CARD_COUNT_DESCTOP, ADDED_CARD_COUNT_DESCTOP });
      } else {
         setRenderedCardsCount({ RENDERED_CARD_COUNT_MOBILE, ADDED_CARD_COUNT_MOBILE });
      }
   }, [width]);

   useEffect(() => {
      if (list.length && !SavedMoviesPage) {
         const res = list.filter((item, index) => index < renderedCardsCount.rendered);
         console.log(res);
         setShowList(res);
      }
   }, [list, SavedMoviesPage, renderedCardsCount.rendered]);

   function getSavedMovie(arr, id) {
      return arr.find((item) => {
         return item.movieId === id;
      });
   };

   function handleClickMoreMovies() {
      const start = showList.length;
      const end = start + renderedCardsCount.added;
      const difference = list.length - start;

      if (difference > 0) {
         const newCards = list.slice(start, end);
         setShowList([...showList, ...newCards]);
      }
   };

   function getSavedMoviesPage() {
      return list.map((item) => (
         <MoviesCard
            key={item._id}
            card={item}
            savedPage={SavedMoviesPage}
            onDelete={onDeleteClick}
         />
      ))
   };

   function getInitialMoviesPage() {
      return showList.map((item) => {
         const likedMovieCard = getSavedMovie(SavedMoviesList, item.id);
         const likedMovieId = likedMovieCard
            ? likedMovieCard._id
            : null;
         return (
            <MoviesCard
               key={item.id}
               card={{ ...item, _id: likedMovieId }}
               onLike={onLikeClick}
               onDelete={onDeleteClick}
               liked={likedMovieCard
                  ? true
                  : false}
            />)
      })
   };

   return (
      <section className='movies-cardlist'>
         {isLoading ? (
            <Preloader />
         ) : (
            (list.length === 0 || isError) ? (
               <p className={`movies-cardlist__message 
               ${isError && 'movies-cardlist__message_type_err'}`}>
                  {isError
                     ? `Ошибка сервера `
                     : 'Нет фильмов'}
               </p>
            ) : (
               <ul className='movies-cardlist__items'>
                  <div className={SavedMoviesPage
                     ? `movies-list__box movies-list__box_saved-page`
                     : `movies-list__box`}>
                     {SavedMoviesPage
                        ? getSavedMoviesPage()
                        : getInitialMoviesPage()}
                  </div>
                  <button
                     className={(SavedMoviesPage || list.length === 0 || showList.length === list.length)
                        ? `movies-cardlist__button movies-cardlist__button_none`
                        : `movies-cardlist__button`}
                     type='button'
                     onClick={handleClickMoreMovies}
                  >
                     Ещё
                  </button>
               </ul>
            )
         )}
      </section>
   );
}
