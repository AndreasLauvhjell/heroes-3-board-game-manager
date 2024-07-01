// CampaignMenu Component
import React from 'react';
import Ingame from '../assets/images/backgroundimages/ingame/ingame.png'
import IngameMenu from '../assets/images/icons/ingame/IngameMenu.png'

function Play() {

    const handleButtonClick = (bAction:string) => {
        if(bAction === 'IngameMenu') {
          //something
        } 
    };

    return (
        <>
        <img src={Ingame} alt="Background" className="background-image" />
        <div className='main-menu'>
            <div className='menu-container'>
                <button className="menu-button" onClick={() => handleButtonClick('IngameMenu')}>
                    <img src={IngameMenu} alt={IngameMenu} className="menu-icon" />
                </button>
            </div>
        </div>
        </>
    );
}

export default Play;
