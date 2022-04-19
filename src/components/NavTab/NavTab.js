import './NavTab.css';

function NavTab() {
   return (
      <nav className='navtab'>
         <button className='navtab__button' type='button'>О проекте</button>
         <button className='navtab__button' type='button'>Технологии</button>
         <button className='navtab__button' type='button'>Студент</button>
      </nav>
   )
};

export default NavTab;
