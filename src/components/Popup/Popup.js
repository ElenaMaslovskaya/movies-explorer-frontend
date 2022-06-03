import React from 'react';
import './Popup.css';
import fail from '../../images/fail.svg';
import success from '../../images/success.svg';

export default function Popup({
   closePopup,
   isErrorStatus,
   messagePopup,
   isOpen
}) {

   return (
      <section
         className={`popup 
         ${isOpen
               ? 'popup_opened'
               : ''}`}
      >
         <div className='modal__container'>
            <img
               src={isErrorStatus
                  ? fail
                  : success}
               alt='Ошибка'
               className='popup__img'
            />
            <button
               type='button'
               className='popup__close'
               onClick={closePopup} >
            </button>
            <p className='popup__message'>
               {messagePopup}
            </p>
         </div>
      </section>
   );
}

