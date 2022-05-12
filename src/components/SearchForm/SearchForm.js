import React from 'react';
import './SearchForm.css';
import FindIcon from '../../images/find.svg';
import DividingLine from '../../images/dividing-line.svg';
import Search from '../../images/search.svg'

export default function SearchForm() {
   const [isFilter, setIsFilter] = React.useState(false);

   function handleFilterOn() {
      setIsFilter(!isFilter);
   }

   /*
      function handleFilterOff() {
         setIsFilter(false);
      }
   */
   return (
      <section className='search-form'>
         <div className='search-form__container'>

            <form className='search-form__form'>
               <img className='search-form__input-icon' src={Search} alt='Поиск' />
               <input className='search-form__input' type='text' placeholder='Фильм' autoComplete='off' minLength='2' maxLength='100' required />
               <button className='search-form__button' type='submit'>
                  <img className='search-form__icon' src={FindIcon} alt='поиск' />
               </button>
               <img className='search-form__line' src={DividingLine} alt='разделитель' />
            </form>

            <div className='search-form__short'>
               <div onClick={handleFilterOn} className={`search-form__short_button ${isFilter ? '_filter1' : ''}`}>
                  <div className={`search-form__short_disk ${isFilter ? '_filter2' : ''}`}></div>
               </div>
               <p className='search-form__short-title'>Короткометражки</p>
            </div>
         </div>
      </section>
   )
}
