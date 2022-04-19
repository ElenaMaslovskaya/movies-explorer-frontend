import React from 'react';
import './SearchForm.css';
import FindIcon from '../../images/find.svg';

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
                  <input className='search-form__input' type='text' placeholder='Фильм' autoComplete='off' minLength='2' maxLength='100' required />
                  <button className='search-form__button' type='submit'>
                     <img src={FindIcon} alt='поиск' />
                  </button>
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
