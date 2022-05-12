import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export default function HeaderLogo() {
   return (
      <div>
         <Link to='/' className='logo'>
            <img className='logo__button' src={logo} alt='логотип' />
         </Link>
      </div>
   )
}
