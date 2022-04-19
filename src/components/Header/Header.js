import './Header.css';
import logo from '../../images/logo.svg';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header(props) {
   const { pathname } = useLocation;

   return (
      <header className='header'>
         <img className="header__logo" alt="Логотип" src={logo} />
         {
            (pathname !== '/signup' || pathname !== '/signin') && 
            <Navigation
               isLoggedIn={props.isLoggedIn}
            />
         }
      </header>
   )
}
