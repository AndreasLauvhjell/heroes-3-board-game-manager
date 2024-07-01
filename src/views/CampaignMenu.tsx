// CampaignMenu Component
import React from 'react';
import CampaignBackground from '../assets/images/backgroundimages/CampaignMenu.png'

function CampaignMenu() {
  return (
    <>
      <img src={CampaignBackground} alt="Background" className="background-image" />
      <div className='main-menu'>
        <div className='menu-container'>
          <p>This is the campaign menu</p>
        </div>
      </div>
    </>
  );
}

export default CampaignMenu;
