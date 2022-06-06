import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';

export default function Login(props) {

   const {
      values,
      errors,
      isValid,
      handleChange
   } = useForm();

   const history = useHistory();

   useEffect(() => {
      if (props.loggedIn)
         history.push('/movies');
   }, []);

   function handleSubmit(e) {
      e.preventDefault();
      props.onSubmit(values.email, values.password);
   };

   return (
      <section className='login'>
         <form
            className='form-login'
            name='form-login'
            onSubmit={handleSubmit}>
            <div className='form-login__container'>
               <div className='form-login__header'>
                  <Logo />
                  <h2 className='form-login__title'>
                     Рады видеть!
                  </h2>
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
                  name='email'
                  placeholder='Email'
                  required
                  onChange={handleChange}
               />
               <span className='form-login__error'>
                  {errors.email || ''}
               </span>

               <label
                  className='form-login__label'
                  htmlFor='login-password'>
                  Пароль
               </label>
               <input
                  className='form-login__input'
                  type='password'
                  id='login-password'
                  name='password'
                  placeholder='Password'
                  minLength='8'
                  required
                  onChange={handleChange}
               />
               <span className='form-login__error'>
                  {errors.password || ''}
               </span>

               <button
                  className={`form-login__button 
                        ${!isValid
                        ? 'form-login__button_disabled'
                        : ''}`}
                  type='submit'
               >
                  {`${props.isLoading
                     ? 'Вход...'
                     : 'Войти'}`}
               </button>
               <div className='form-login__link'>
                  <p className='form-login__link_text'>
                     Ещё не зарегистрированы?
                     <Link
                        to='/signup'
                        className='form-login__link_register'>
                        Регистрация
                     </Link>
                  </p>
               </div>
            </div>
         </form>
      </section>
   )
}
