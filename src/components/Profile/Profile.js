import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
   return (
      <section className='profile'>
         <form className='form-profile' name='form-profile'>
            <div className='form-profile__container'>
               <h2 className='form-profile__title'>
                  Привет, Елена!
               </h2>

               <div className='form-profile__input-box'>
                  <span   className='form-profile__span'>
                     Имя
                  </span>
                  <input
                     className='form-profile__input'
                     type='text'
                     id='profile-name'
                     name='profile-name'
                     placeholder='Елена'
                     autoComplete='off'
                     required
                  />
               </div>

               <div className='form-profile__input-box border-none'>
                  <span className='form-profile__span'>
                     E-mail
                  </span>
                  <input
                     className='form-profile__input'
                     type='email'
                     id='profile-email'
                     name='profile-email'
                     placeholder='elena.maslovski@yandex.ru'
                     autoComplete='off'
                     required
                  />

               </div>
               <button className='form-profile__button' type='submit'>
                  Редактировать
               </button>
               <div className='form-profile__link'>
                  <Link to='/signin' className='form-profile__link_exit'>Выйти из аккаунта</Link>
               </div>
            </div>
         </form>
      </section>
   )
}
