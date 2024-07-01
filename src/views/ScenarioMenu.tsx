// CampaignMenu Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScenarioBackground from '../assets/images/backgroundimages/ScenarioMenu.png'

import Begin from '../assets/images/icons/scenariomenu/begin.png'
import Back from '../assets/images/icons/scenariomenu/back.png'

function ScenarioMenu() {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = (bAction:string) => {
    if(bAction === 'back') {
      navigate('/');
    } else if (bAction === 'begin') {
      navigate('/play')
    }
  };

  return (
    <>
      <img src={ScenarioBackground} alt="Background" className="background-image" />
      <div className='main-menu'>
        <div className='menu-container'>

        <button className="menu-button" onClick={() => handleButtonClick('begin')}>
          <img src={Begin} alt={Begin} className="menu-icon" />
        </button>

        <button className="menu-button" onClick={() => handleButtonClick('back')}>
          <img src={Back} alt={Back} className="menu-icon" />
            </button>
          </div>
      </div>
    </>
  );
}

export default ScenarioMenu;
