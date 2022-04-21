import React from 'react';
import './Footer.css';

export default function Footer() {
   return (
      <footer className='footer'>
         <h3 className='footer__title'>
            Учебный проект Яндекс.Практикум х BeatFilm.
         </h3>
         <div className='footer__content'>
            <ul className='footer__list'>
               <li className='footer__list-item'>
                  <a
                     className='footer__link'
                     target='_blank'
                     rel='noreferrer'
                     href='https://practicum.yandex.ru/'
                  >
                     Яндекс.Практикум
                  </a>
               </li>
               <li className='footer__list-item'>
                  <a
                     className='footer__link'
                     target='_blank'
                     rel='noreferrer'
                     href='https://github.com/ElenaMaslovskaya'
                  >
                     Github
                  </a>
               </li>
               <li className='footer__list-item'>
                  <a
                     className='footer__link'
                     target='_blank'
                     rel='noreferrer'
                     href='https://www.instagram.com/moi_everest/'
                  >
                     Instagramm
                  </a>
               </li>
            </ul>
            <p className='footer__copyright'>&copy; 2022</p>
         </div>
      </footer>
   )
}
