import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useForm from '../../hooks/useForm';

export default function Profile({
   handleLogOut,
   handleUpdateUser,
   isErrorState
}) {

   const [isInputActive, setIsInputActive] = useState(false);
   const currentUser = useContext(CurrentUserContext);
   const { 
      values,
      errors,
      isValid,
      handleChange,
      setValues,
      setIsValid } = useForm();

   useEffect(() => {
      console.log(currentUser);
      if (currentUser) {
         setValues({
            name: currentUser.name,
            email: currentUser.email,
         });
      }
   }, [setValues, currentUser]);

   useEffect(() => {
      if (currentUser.name === values.name
         && currentUser.email === values.email) {
         setIsValid(false);
      }
   }, [setIsValid, values, currentUser]);

   useEffect(() => {
      if (isErrorState === false) {
         setIsInputActive(false);
      }
   }, [setIsInputActive, isErrorState]);

   function handleSubmit(e) {
      e.preventDefault();
      handleUpdateUser(values.name, values.email);
      setIsInputActive(false);
   };

   function handleRedactClick() {
      setIsInputActive(true);
   };


   return (
      <section className='profile'>
         <form
            className='form-profile'
            name='form-profile'
            onSubmit={handleSubmit}>
            <div className='form-profile__container'>
               <h2 className='form-profile__title'>
                  Привет,
                  {' '}
                  {currentUser.name}
                  !
               </h2>

               <div className='form-profile__input-box'>
                  <span className='form-profile__span'>
                     Имя
                  </span>
                  <div className='form-profile__input-block'>
                     <input
                        className='form-profile__input'
                        type='text'
                        id='name'
                        name='name'
                        minLength='2'
                        maxLength='30'
                        onChange={handleChange}
                        required
                        pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
                        defaultValue={values.name || ''}
                     // disabled={!isInputActive}
                     />
                     <span id='email-error' className='profile__error'>
                        {errors.name || ''}
                     </span>
                  </div>
               </div>

               <div className='form-profile__input-box border-none'>
                  <span className='form-profile__span'>
                     E-mail
                  </span>
                  <div className='form-profile__input-block'>
                     <input
                        className='form-profile__input'
                        type='email'
                        id='profile-email'
                        name='email'
                        required
                        defaultValue={values.email || ''}
                        onChange={handleChange}
                     // disabled={!isInputActive}
                     />
                     <span id='email-error' className='profile__error'>
                        {errors.email || ''}
                     </span>
                  </div>
               </div>
               <button
                  className={`form-profile__button 
                  ${!isValid
                        ? 'form-profile__button_disabled'
                        : ''}`}
                  type='submit'
                  onClick={handleRedactClick}>
                  Редактировать
               </button>
               <div className='form-profile__link'>
                  <Link
                     to='/signin'
                     className='form-profile__link_exit'
                     onClick={handleLogOut}>
                     Выйти из аккаунта
                  </Link>
               </div>
            </div>
         </form>
      </section >
   )
}
