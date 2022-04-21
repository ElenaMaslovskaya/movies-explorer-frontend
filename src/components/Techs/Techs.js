import ProjectTitle from '../ProjectTitle/ProjectTitle';
import './Techs.css';

export default function Techs() {
   return (
      <section className='techs' id='techs'>
         <ProjectTitle
            ProjectTitle='Технологии'
         />
         <h3 className='techs__title'>7 технологий</h3>
         <p className='techs__info'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
         <ul className='techs__list'>
            <li className='techs__skills'>HTML</li>
            <li className='techs__skills'>CSS</li>
            <li className='techs__skills'>JS</li>
            <li className='techs__skills'>React</li>
            <li className='techs__skills'>Git</li>
            <li className='techs__skills'>Express.js</li>
            <li className='techs__skills'>MongoDB</li>
         </ul>
      </section>
   )
}
