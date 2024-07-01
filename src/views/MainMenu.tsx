// MainMenu Component
import React from 'react';
import MenuList from "../components/MenuList";
import MenuBackground from '../assets/images/backgroundimages/MainMenu.png'
import '../assets/styles/MainMenu.css';

function MainMenu() {
  return (
    <>
      <img src={MenuBackground} alt="Background" className="background-image" />
      <div className='main-menu'>
        <div className='menu-container'>
          <MenuList />
        </div>
      </div>
    </>
  );
}

export default MainMenu;
