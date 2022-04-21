import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
   return (
      <section className='register'>
         <form className='form' name='form-register'>
            <Link to="/" className='form__logo' />
            <h2 className='form__title'>Добро пожаловать!</h2>

            <label
               className='form__label'
               htmlFor='user-name'>
               Имя
            </label>
            <input
               className='form__input'
               type='text'
               id='user-name'
               name='user-name'
               placeholder='Name'
               autoComplete='off'
               required
            />
            <span className='form__error'></span>

            <label
               className='form__label'
               htmlFor='register-email'>
               E-mail
            </label>
            <input
               className='form__input'
               type='email'
               id='register-email'
               name='register-email'
               placeholder='Email'
               autoComplete='off'
               required
            />
            <span className='form__error'></span>
            <label
               className='form__label'
               htmlFor='register-password'>
               Пароль
            </label>
            <input
               className='form__input' 
               type='password' 
               id='register-password'
               name='register-password'
               placeholder='Password'
               autoComplete='off'
               required
               />
            <span className='form__error'></span>
            <button className='form__button' type='submit'>Зарегистрироваться</button>
            <div className='form__link'>
               <p className='form__link_text'>Уже зарегистрированы?
               <Link to='/signin' className='form__link_login'>Войти</Link>
               </p>
            </div>
         </form>
      </section>
   )
}
