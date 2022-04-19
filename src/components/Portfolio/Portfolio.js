import './Portfolio.css';

export default function Portfolio() {
   return (
      <section className='portfolio'>
         <h3 className='portfolio__title'>Портфолио</h3>
         <ul className='portfolio__sites'>
            <li className='portfolio__site'>
               <a className='portfolio__link' href='https://google.com'>
                  Статичный сайт
                  <span>&#129125;</span>
               </a>
            </li>
            <li className='portfolio__site'>
               <a className='portfolio__link' href='https://google.com'>
                  Адаптивный сайт
                  <span>&#129125;</span>
               </a>
            </li>
            <li className='portfolio__site'>
               <a className='portfolio__link' href='https://google.com'>
                  Одностраничное приложение
                  <span>&#129125;</span>
               </a>
            </li>
         </ul>
      </section>
   )
}

