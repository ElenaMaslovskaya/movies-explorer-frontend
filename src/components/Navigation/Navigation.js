import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({
   isOpen,
   onClose
}) {
   return (
      <section className={`navigation 
      ${isOpen
            ? 'navigation_opened'
            : ''}`}>
         <div className='navigation__container'>
            <button
               className="navigation__close"
               onClick={onClose}
            />
            <div className="navigation__movies-list">
               <NavLink exact to="/" className="navigation__movies" >
                  Главная
               </NavLink>
               <NavLink
                  to="/movies"
                  className="navigation__movies"
               >
                  Фильмы
               </NavLink>
               <NavLink
                  to="/saved-movies"
                  className="navigation__movies"
               >
                  Сохраненные фильмы
               </NavLink>
            </div>
            <div className="navigation__profile">
               <div className="navigation__profile-links">
                  <NavLink
                     to="/profile"
                     className="navigation__profile-link"
                  >
                     Аккаунт
                  </NavLink>
                  <NavLink
                     to="/profile"
                     className="navigation__profile-icon"
                  />
               </div>
            </div>
         </div>
      </section>
   )
}
