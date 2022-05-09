import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Register.css';

export default function Register() {
   return (
      <section className='register'>
         <form className='form-register' name='form-register'>
            <div className='form-register__container'>
               <div className='form-register__header'>
                  <Logo />
                  <h2 className='form-register__title'>Добро пожаловать!</h2>
               </div>
               <label
                  className='form-register__label'
                  htmlFor='user-name'>
                  Имя
               </label>
               <input
                  className='form-register__input'
                  type='text'
                  id='user-name'
                  name='user-name'
                  placeholder='Name'
                  autoComplete='off'
                  minLength='2'
                  maxLength='30'
                  required
               />
               <span className='form-register__error'></span>

               <label
                  className='form-register__label'
                  htmlFor='register-email'>
                  E-mail
               </label>
               <input
                  className='form-register__input'
                  type='email'
                  id='register-email'
                  name='register-email'
                  placeholder='Email'
                  autoComplete='off'
                  required
               />
               <span className='form-register__error'></span>
               <label
                  className='form-register__label'
                  htmlFor='register-password'>
                  Пароль
               </label>
               <input
                  className='form-register__input'
                  type='password'
                  id='register-password'
                  name='register-password'
                  placeholder='Password'
                  autoComplete='off'
                  minLength='8'
                  required
               />
               <span className='form-register__error'></span>
               <button className='form-register__button' type='submit'>Зарегистрироваться</button>
               <div className='form-register__link'>
                  <p className='form-register__link_text'>Уже зарегистрированы?
                     <Link to='/signin' className='form-register__link_login'>Войти</Link>
                  </p>
               </div>
            </div>
         </form>
      </section>
   )
}
