import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';

export default function Login() {
   return (
      <section className='login'>
         <form className='form-login' name='form-login'>
            <div className='form-login__container'>
               <div className='form-login__header'>
                  <Logo />
                  <h2 className='form-login__title'>Рады видеть!</h2>
               </div>
               <label
                  className='form-login__label'
                  htmlFor='login-email'>
                  E-mail
               </label>
               <input
                  className='form-login__input'
                  type='email'
                  id='login-email'
                  name='login-email'
                  placeholder='Email'
                  autoComplete='off'
                  required
               />
               <span className='form-login__error'></span>
               <label
                  className='form-login__label'
                  htmlFor='login-password'>
                  Пароль
               </label>
               <input
                  className='form-login__input'
                  type='password'
                  id='login-password'
                  name='login-password'
                  placeholder='Password'
                  autoComplete='off'
                  required
               />
               <span className='form-login__error'></span>
               <button className='form-login__button' type='submit'>Войти</button>
               <div className='form-login__link'>
                  <p className='form-login__link_text'>Ещё не зарегистрированы?
                     <Link to='/signup' className='form-login__link_register'>Регистрация</Link>
                  </p>
               </div>
            </div>
         </form>
      </section>
   )
}
