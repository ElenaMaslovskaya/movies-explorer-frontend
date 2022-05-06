import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
   return (
      <section className='notfound'>
         <div className='notfound__container'>
            <h2 className='notfound__title'>
               404
            </h2>
            <p className='notfound__subtitle'>
               Страница не найдена
            </p>
            <Link to='/' className='notfound__link'>
               Назад
            </Link>
         </div>
      </section>
   )
}
