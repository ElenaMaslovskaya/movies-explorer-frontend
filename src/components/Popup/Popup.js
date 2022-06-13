import React from 'react';
import './Popup.css';
import fail from '../../images/fail.svg';
import success from '../../images/success.svg';

export default function Popup({
   onClose,
   isErrorState,
   message,
   isOpen
}) {

   return (
      <section
         className={`popup 
         ${isOpen
               ? 'popup_opened'
               : ''}`}
      >
         <div className='popup__container'>
            <button
               type='button'
               className='popup__close'
               onClick={onClose} >
            </button>
            <img
               src={isErrorState
                  ? fail
                  : success}
               alt='Ошибка'
               className='popup__img'
            />
            <p className='popup__message'>
               {message}
            </p>
         </div>
      </section>
   );
}

