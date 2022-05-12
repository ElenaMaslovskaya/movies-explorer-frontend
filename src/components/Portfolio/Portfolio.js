import './Portfolio.css';
import arrow from '../../images/arrow.svg';

export default function Portfolio() {
   return (
      <section className='portfolio'>
         <h3 className='portfolio__title'>Портфолио</h3>
         <ul className='portfolio__sites'>
            <li className='portfolio__site'>
               <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://github.com/ElenaMaslovskaya/how-to-learn'>
                  Статичный сайт
                  <img className='portfolio__arrow-icon' alt='arrow' src={arrow} />
               </a>
            </li>
            <li className='portfolio__site'>
               <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://github.com/ElenaMaslovskaya/russian-travel'>
                  Адаптивный сайт
                  <img className='portfolio__arrow-icon' alt='arrow' src={arrow} />
               </a>
            </li>
            <li className='portfolio__site'>
               <a className='portfolio__link' target='_blank' rel='noreferrer' href='https://github.com/ElenaMaslovskaya/react-mesto-api-full'>
                  Одностраничное приложение
                  <img className='portfolio__arrow-icon' alt='arrow' src={arrow} />
               </a>
            </li>
         </ul>
      </section>
   )
}

