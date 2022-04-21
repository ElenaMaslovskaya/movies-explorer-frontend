import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
   return (
      <section className='login'>
         <form className='form' name='form-login'>
            <Link to="/" className='form__logo' />
            <h2 className='form__title'>Рады видеть!</h2>

            <label
               className='form__label'
               htmlFor='login-email'>
               E-mail
            </label>
            <input
               className='form__input'
               type='email'
               id='login-email'
               name='login-email'
               placeholder='Email'
               autoComplete='off'
               required
            />
            <span className='form__error'></span>
            <label
               className='form__label'
               htmlFor='login-password'>
               Пароль
            </label>
            <input
               className='form__input' 
               type='password' 
               id='login-password'
               name='login-password'
               placeholder='Password'
               autoComplete='off'
               required
               />
            <span className='form__error'></span>
            <button className='form__button' type='submit'>Войти</button>
            <div className='form__link'>
               <p className='form__link_text'>Ещё не зарегистрированы?
               <Link to='/signup' className='form__link_register'>Регистрация</Link>
               </p>
            </div>
         </form>
      </section>
   )
}
