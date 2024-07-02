// CampaignMenu Component
import React from 'react';
import IngameBackground from '../assets/images/backgroundimages/ingame/ingame.png'
import IngameMenu from '../assets/images/icons/ingame/IngameMenu.png'
import Btn from '../components/Button';



function Ingame() {

    return (
        <>
            <img src={IngameBackground} alt="Background" className="background-image" />
            <div className='main-menu'>
                <div className='menu-container'>
                    <Btn imgSource={ IngameMenu } />
                </div>
            </div>
        </>
    );
}

export default Ingame;
