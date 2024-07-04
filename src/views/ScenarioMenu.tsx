// CampaignMenu Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScenarioBackground from '../assets/images/backgroundimages/scenario/ScenarioMenu.png'

import Begin from '../assets/images/icons/scenariomenu/begin.png'
import Back from '../assets/images/icons/scenariomenu/back.png'
import Btn from '../components/Button';

function ScenarioMenu() {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = (bAction:string) => {
    if(bAction === 'back') {
      navigate('/');
    } else if (bAction === 'begin') {
      navigate('/ingame')
    }
  };

  return (
    <>
      <img src={ScenarioBackground} alt="Background" className="background-image" />
      <div className='main-menu'>
        <div className='menu-container'>

        <Btn 
            imgSource={Begin} 
            onClick={() => handleButtonClick('begin')}
        />
        <Btn 
            imgSource={Back} 
            onClick={() => handleButtonClick('back')}
        />
        
        </div>  
      </div>
    </>
  );
}

export default ScenarioMenu;
