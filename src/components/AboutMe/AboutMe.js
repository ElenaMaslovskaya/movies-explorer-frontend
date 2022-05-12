import './AboutMe.css';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import Photo from '../../images/photo.jpg';

export default function AboutMe() {
   return (
      <section className='about-me' id='about-me'>
         <ProjectTitle
            ProjectTitle='Студент'
         />
         <section className='about-me__content'>
            <img className='about-me__photo' src={Photo} alt='Фото' />
            <div className='about-me__info'>
               <h3 className='about-me__name'>Елена</h3>
               <p className='about-me__subtitle'>Фронтенд-разработчик, 39 лет</p>
               <p className='about-me__description'>
                  Я живу в Германии, закончила местный колледж по профессии химик-лаборант. Я замужем, у меня двое взрослых и двое маленьких детей. Я люблю читать книги и рисовать. Мои брат и сестра программисты и однажды, поинтересовавшись их занятием я не смогла остановиться. Благодаря Яндекс.Практикум я смогла поучаствовать в разработке различных проектов. В данный момент ищу работу веб-разработчика.
               </p>
               <ul className='about-me__links'>
                  <li>
                     <a className='about-me__link' target='_blank' rel='noreferrer' href='https://www.instagram.com/moi_everest/'>
                        Instagramm
                     </a>
                  </li>
                  <li>
                     <a className='about-me__link' target='_blank' rel='noreferrer' href='https://github.com/ElenaMaslovskaya'>
                        Github
                     </a>
                  </li>
               </ul>
            </div>
         </section>
      </section>
   )
}