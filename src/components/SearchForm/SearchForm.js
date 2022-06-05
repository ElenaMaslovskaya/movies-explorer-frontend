import React, { useEffect } from 'react';
import './SearchForm.css';
import FindIcon from '../../images/find.svg';
import DividingLine from '../../images/dividing-line.svg';
import Search from '../../images/search.svg';
import useFormWithValidation from '../../hooks/useFormWithValidation';

export default function SearchForm({
   onSearchClick,
   savedMoviesPage,
   shortFilms,
   onCheckbox }) {

   const { values, isValid, setValues, handleChange, setIsValid } = useFormWithValidation();

   useEffect(() => {
      if (!savedMoviesPage) {
         const keyword = localStorage.getItem('keyword');
         if (keyword) {
            setValues({ keyword: keyword });
            setIsValid(true);
         }
      }
   }, [savedMoviesPage, setValues, setIsValid]);


   function handleSubmit(e) {
      e.preventDefault();
      onSearchClick(values.keyword);
   };

   return (
      <section className='search-form'>
         <div className='search-form__container'>

            <form
               className='search-form__form'
               type='submit'
               onSubmit={handleSubmit}
            >
               <img
                  className='search-form__input-icon'
                  src={Search}
                  alt='Поиск'
               />
               <input
                  className='search-form__input'
                  type='text'
                  name='keyword'
                  placeholder='Фильм'
                  minLength='2'
                  maxLength='100'
                  value={values.keyword || ''}
                  onChange={handleChange}
                  required
               />
               <button
                  className='search-form__button'
                  type='button'
                  disabled={!isValid}
               >
                  <img
                     className='search-form__icon'
                     src={FindIcon}
                     alt='поиск' />
               </button>
               <img
                  className='search-form__line'
                  src={DividingLine}
                  alt='|'
               />
            </form>

            <div className='search-form__short'>
               <label className={`search-form__switch
            ${shortFilms === 'on' 
            ? 'search-form__switch_active' 
            : null}`}>
               <input className='search-form__checkbox search-form__checkbox_off'
                     type="radio"
                     name='shortFilms'
                     value='off'
                     checked={shortFilms === 'off' 
                     ? true 
                     : false}
                     onChange={onCheckbox} />
                  <input className='search-form__checkbox search-form__checkbox_on'
                     type="radio"
                     name='shortFilms'
                     value='on'
                     checked={shortFilms === 'on' 
                     ? true 
                     : false}
                     onChange={onCheckbox} />
                  <span className='search-form__slider'></span>
               </label>
               <p className='search-form__short-title'>
                  Короткометражки
               </p>
            </div>
         </div>
      </section >
   );
}
