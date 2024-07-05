import React, { useState } from 'react';

import Singleplayer from '../../../assets/images/icons/mainmenu/Singleplayer.png';
import Scenario from '../../../assets/images/icons/mainmenu/Scenario.png';
import Campaign from '../../../assets/images/icons/mainmenu/Campaign.png';

import RoE from '../../../assets/images/icons/campaignmenu/roe.png';
import AB from '../../../assets/images/icons/campaignmenu/ab.png';
import SoD from '../../../assets/images/icons/campaignmenu/sod.png';

import Multiplayer from '../../../assets/images/icons/mainmenu/Multiplayer.png';

import Back from '../../../assets/images/icons/mainmenu/Back.png';
import Quit from '../../../assets/images/icons/mainmenu/Quit.png';

import { useNavigate } from 'react-router-dom';
import Btn from '../Button';

const initialMenu = [
  { id: 'singleplayer', img: Singleplayer, alt: 'Singleplayer' },
  { id: 'multiplayer', img: Multiplayer, alt: 'Multiplayer', href:'/multiplayer' },
  //{ id: 'quit', img: Quit, alt: 'Quit' }
];

const singleplayerOptions = [
  { id: 'scenario', img: Scenario, alt: 'Scenario', href:'/scenario' },
  { id: 'campaign', img: Campaign, alt: 'Campaign' },
  { id: 'back', img: Back, alt: 'Back' }
];

const campaignOptions = [
  { id: 'roe', img: RoE, alt: 'Restoration of Erathia', href:'/campaign-roe' },
  { id: 'ab', img: AB, alt: 'Armageddon\'s Blade', href:'/campaign-ab' },
  { id: 'sod', img: SoD, alt: 'Shadow of Death', href:'/campaign-sod' },
  { id: 'back', img: Back, alt: 'Back' }
];

function MenuList() {
  const [menuItems, setMenuItems] = useState(initialMenu);
  const navigate = useNavigate();

  const handleButtonClick = (id:string, href?:string) => {
    if(href) {
      navigate(href);
    }
    if (id === 'singleplayer') {
      setMenuItems(singleplayerOptions);
    } else if (id === 'campaign') {
      setMenuItems(campaignOptions);
    } else {
      setMenuItems(initialMenu);
    }
  };

  return (
    <ul className="main-menu-list">
      {menuItems.map((item) => (
        <li key={item.id}>
          <Btn 
            imgSource={item.img } 
            id ={item.id }
            href={item.href} 
            onClick={handleButtonClick} 
          />
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
