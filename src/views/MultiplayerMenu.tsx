// CampaignMenu Component
import React from 'react';
import MenuBackground from '../assets/images/backgroundimages/MainMenu.png'

function MultiplayerMenu() {
  return (
    <>
    <img src={MenuBackground} alt="Background" className="background-image" />
    <div className='main-menu'>
      <div className='menu-container'>
        <p>This is the multiplayer menu</p>
      </div>
    </div>
    </>
  );
}

export default MultiplayerMenu;
