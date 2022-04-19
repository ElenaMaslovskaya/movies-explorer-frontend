import './AboutMe.css';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import Photo from '../../images/photo.png';

export default function AboutMe() {
   return (
      <section className='about-me'>
         <ProjectTitle
            ProjectTitle='Студент'
         />
         <section className='about-me__info'>
            <img className='about-me__photo' src={Photo} alt='Фото'/>
            <h3 className='about-me__name'>Виталий</h3>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__description'>
               Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className='about-me__links'>
               <li>
                  <a className='about-me__link' href='https://google.com'>
                     Instagramm
                  </a>
               </li>
               <li>
                  <a className='about-me__link' href='https://google.com'>
                     Github
                  </a>
               </li>
            </ul>
         </section>
      </section>
   )
}