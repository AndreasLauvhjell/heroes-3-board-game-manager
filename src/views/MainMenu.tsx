// MainMenu Component
import React from 'react';
import MenuList from "../components/MenuList";
import '../MainMenu.css';

function MainMenu() {
  return (
    <div className='main-menu'>
      <div className='menu-container'>
        <MenuList />
      </div>
    </div>
  );
}

export default MainMenu;
