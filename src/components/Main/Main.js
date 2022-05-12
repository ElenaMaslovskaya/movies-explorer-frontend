import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css'
import Portfolio from '../Portfolio/Portfolio';

export default function Main() {
   return (
      <div className='main'>
         <Promo />
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio />
      </div>
   )
}
