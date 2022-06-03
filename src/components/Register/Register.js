import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Register.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { useHistory } from 'react-router-dom';

export default function Register(props) {
   const {
      values,
      errors,
      isValid,
      handleChange } = useFormWithValidation();

   const history = useHistory();

   useEffect(() => {
      if (props.loggedIn)
         history.push('/movies');
   }, []);

   function handleSubmit(e) {
      e.preventDefault();
      props.onSubmit(values.name, values.email, values.password);
   };

   return (
      <section className='register'>
         <form
            className='form-register'
            name='form-register'
            onSubmit={handleSubmit}
         >
            <div className='form-register__container'>
               <div className='form-register__header'>
                  <Logo />
                  <h2 className='form-register__title'>
                     Добро пожаловать!
                  </h2>
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
                  minLength='2'
                  maxLength='30'
                  required
                  onChange={handleChange}
                  pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
               />
               <span className='form-register__error'>
                  {errors.name || ''}
               </span>

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
                  required
                  onChange={handleChange}
                  pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
               />
               <span className='form-register__error'>
                  {errors.email || ''}
               </span>

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
                  minLength='8'
                  required
                  onChange={handleChange}
               />
               <span className='form-register__error'>
                  {errors.password || ''}
               </span>

               <button
                  className={`form-register__button 
                  ${!isValid
                        ? 'form-register__button_disabled'
                        : ''}`}
                  type='submit'
               >
                  {`${props.isLoading
                     ? 'Регистрация...'
                     : 'Зарегистрироваться'}`}
               </button>
               <div className='form-register__link'>
                  <p className='form-register__link_text'>
                     Уже зарегистрированы?
                     <Link
                        to='/signin'
                        className='form-register__link_login'>
                        Войти
                     </Link>
                  </p>
               </div>
            </div>
         </form>
      </section>
   )
}
