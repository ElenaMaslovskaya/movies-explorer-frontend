/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MenuBurger from '../MenuBurger/MenuBurger';
import './Header.css';

export default function Header() {
   const location = useLocation();
   const [isMenuBurgerOpened, setIsMenuBurgerOpened] = React.useState(false);
   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
   const [isWidthChange, setIsWidthChange] = React.useState(window.innerWidth);
   const adaptiveWidth = () => {
      setIsWidthChange(window.innerWidth);
   };
   const isDesktop = isWidthChange >= 1280;

   React.useEffect(() => {
      window.addEventListener('resize', adaptiveWidth);
      return () => window.removeEventListener('resize', adaptiveWidth);
   });

   React.useEffect(() => {
      if (location.pathname === '/') {
         setIsLoggedIn(false);
      }
      if (location.pathname === '/profile' || location.pathname === '/saved-movies' || location.pathname === '/movies') {
         setIsLoggedIn(true);
      }
   }, [location.pathname]);

   function handleMenuBurgerClick() {
      setIsMenuBurgerOpened(!isMenuBurgerOpened);
   }

   return (
      <header className='header'>
         <Logo />
         <nav className="header__links">

            {isLoggedIn && !isDesktop && (
               <button
                  type="button"
                  className="header__menu-burger"
                  onClick={handleMenuBurgerClick}
               />
            )}

            {isLoggedIn && !isDesktop && (
               <MenuBurger
                  isOpen={isMenuBurgerOpened}
                  onClose={handleMenuBurgerClick}
               />
            )}

            {
               !isLoggedIn && (
                  <>
                     <Link
                        to="signup"
                        className="header__signup"
                     >
                        Регистрация
                     </Link>
                     <Link
                        to="signin"
                        className="header__signin"
                     >
                        Войти
                     </Link>
                  </>
               )
            }
            {
               isLoggedIn && isDesktop && (
                  <>
                     <NavLink
                        to="/movies"
                        className="header__link header__link_movies"
                     >
                        Фильмы
                     </NavLink>
                     <NavLink
                        to="/saved-movies"
                        className="header__link header__link_saved-movies"
                     >
                        Сохраненные фильмы
                     </NavLink>
                     <NavLink
                        to="/profile"
                        className="header__link header__link_profile"
                     >
                        Аккаунт
                     </NavLink>
                     <Link
                        to="/profile"
                        className="header__link header__icon-profile"
                     />
                  </>
               )
            }
         </nav>
      </header>
   );
}
