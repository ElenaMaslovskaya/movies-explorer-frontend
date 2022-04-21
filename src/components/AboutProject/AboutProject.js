import ProjectTitle from '../ProjectTitle/ProjectTitle'
import './AboutProject.css'

export default function AboutProject() {
   return (
      <section className='about-project' id='about-project'>
         <ProjectTitle
            ProjectTitle='О проекте'
         />
         <div className='about-project__info'>
            <div className='about-project__card'>
               <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
               <p className='about-project__discription'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className='about-project__card'>
               <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
               <p className='about-project__discription'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
         </div>
         <div className='about-project__timeframe'>
            <p className='about-project__timeframe_line'>1 неделя</p>
            <p className='about-project__timeframe_line'>4 недели</p>
            <p className='about-project__timeframe_text'>Back-end</p>
            <p className='about-project__timeframe_text'>Front-end</p>
         </div>
      </section>
   )
}
