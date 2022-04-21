import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBurger.css';

export default function MenuBurger(props) {
   return (
      <section className={`menu-burger ${props.isOpen ? 'menu-burger_opened' : ''}`}>
         <div className='menu-burger__container'>
            <button
               className="menu-burger__close"
               onClick={props.onClose}
            />
            <div className="menu-burger__movies-list">
               <NavLink exact to="/" className="menu-burger__movies" >
                  Главная
               </NavLink>
               <NavLink
                  to="/movies"
                  className="menu-burger__movies"
               >
                  Фильмы
               </NavLink>
               <NavLink
                  to="/saved-movies"
                  className="menu-burger__movies"
               >
                  Сохраненные фильмы
               </NavLink>
            </div>
            <div className="menu-burger__profile">
               <div className="menu-burger__profile-links">
                  <NavLink
                     to="/profile"
                     className="menu-burger__profile-link"
                  >
                     Аккаунт
                  </NavLink>
                  <NavLink
                     to="/profile"
                     className="menu-burger__profile-icon"
                  />
               </div>
            </div>
         </div>
      </section>
   )
}
