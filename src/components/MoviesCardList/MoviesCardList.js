import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCardList(props) {
   const location = useLocation();
   const [listButton, setListButton] = React.useState(false);

   React.useEffect(() => {
      if (location.pathname === 'saved/movies') {
         setListButton(true);
      }
   }, [location.pathname])

   return (
      <section className='movies-cardlist'>
            <ul className='movies-cardlist__items'>
               {props.moviesCard.map((card) => (
                  <MoviesCard 
                     key={card.id}
                     moviesCard={card}
                  />
               ))}
            </ul>
            <button className={`${listButton ? 'movies-cardlist__button_none' : 'movies-cardlist__button'}`}>Ещё</button>
      </section>
   )
}
