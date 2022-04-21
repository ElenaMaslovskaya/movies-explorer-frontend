import React from 'react';
import './Footer.css';

export default function Footer() {
   return (
      <footer className='footer'>
         <h3 className='footer__title'>
            Учебный проект Яндекс.Практикум х BeatFilm.
         </h3>
         <ul className='footer__list'>
            <li className='footer__list-item'>
               <a
                  className='footer__link'
                  target='_blank'
                  rel='noreferrer'
                  href='https://google.com'
               >
                  Яндекс.Практикум
               </a>
            </li>
            <li className='footer__list-item'>
               <a
                  className='footer__link'
                  target='_blank'
                  rel='noreferrer'
                  href='https://google.com'
               >
                  Github
               </a>
            </li>
            <li className='footer__list-item'>
               <a
                  className='footer__link'
                  target='_blank'
                  rel='noreferrer'
                  href='https://google.com'
               >
                  Facebook
               </a>
            </li>
         </ul>
         <p className='footer__copyright'>&copy; 2022</p>
      </footer>
   )
}
