import React, { useState } from 'react';
import Singleplayer from '../assets/images/icons/menu/Singleplayer.png';
import Scenario from '../assets/images/icons/menu/Scenario.png';
import Campaign from '../assets/images/icons/menu/Campaign.png';

import Multiplayer from '../assets/images/icons/menu/Multiplayer.png';

import Quit from '../assets/images/icons/menu/Quit.png';
import Back from '../assets/images/icons/menu/Back.png';

const initialMenu = [
  { id: 'singleplayer', img: Singleplayer, alt: 'Singleplayer' },
  { id: 'multiplayer', img: Multiplayer, alt: 'Multiplayer' },
  { id: 'quit', img: Quit, alt: 'Quit' }
];

const singleplayerOptions = [
  { id: 'scenario', img: Scenario, alt: 'Scenario' },
  { id: 'campaign', img: Campaign, alt: 'Campaign' },
  { id: 'back', img: Back, alt: 'Back' }
];

function MenuList() {
  const [menuItems, setMenuItems] = useState(initialMenu);

  const handleButtonClick = (id:string) => {
    if (id === 'singleplayer') {
      setMenuItems(singleplayerOptions);
    } else if (id === 'scenario' || id === 'campaign') {
      // Handle scenario or campaign selection
    } else {
      setMenuItems(initialMenu);
    }
  };

  return (
    <ul className="menu-list">
      {menuItems.map((item) => (
        <li key={item.id}>
          <button className="menu-button" onClick={() => handleButtonClick(item.id)}>
            <img src={item.img} alt={item.alt} className="menu-icon" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
