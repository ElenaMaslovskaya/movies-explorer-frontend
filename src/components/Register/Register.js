import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export default function Register() {
   return (
      <section className='register'>
         <form className='form' name='form-register'>
            <img className="form__logo" alt="Логотип" src={logo} />
            <h2 className='form__title'>Добро пожаловать!</h2>
            <span className='form__subtitle'>Имя</span>
            <input className='form__input' type='text' />
            <span className='form__subtitle'>E-mail</span>
            <input className='form__input' type='email' />
            <span className='form__subtitle'>Пароль</span>
            <input className='form__input' type='password' />
            <span className='form__subtitle_error'></span>
            <button className='form__button' type='submit'></button>
            <div className='form__link'>
               <p className='form__link_text'></p>
               <Link to='/signin' className='form__link_in'></Link>
            </div>
         </form>
      </section>
   )
}
