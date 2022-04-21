import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
   return (
      <section className='profile'>
         <form className='form' name='form-profile'>
            <h2 className='form__title'>Привет, Елена!</h2>

            <label
               className='form__label'
               htmlFor='profile-name'>
               Имя
            </label>
            <input
               className='form__input'
               type='text'
               id='profile-name'
               name='profile-name'
               placeholder='Елена'
               autoComplete='off'
               required
            />
            <span className='form__error'></span>

            <label
               className='form__label'
               htmlFor='profile-email'>
               E-mail
            </label>
            <input
               className='form__input'
               type='email'
               id='profile-email'
               name='profile-email'
               placeholder='elena.maslovski@yandex.ru'
               autoComplete='off'
               required
            />
            <span className='form__error'></span>

            <button className='form__button' type='submit'>Редактировать</button>
            <div className='form__link'>
               <a className='form__link_text'>
                  <Link to='/' className='form__link_exit'>Выйти из аккаунта</Link>
               </a>
            </div>
         </form>
      </section>
   )
}
