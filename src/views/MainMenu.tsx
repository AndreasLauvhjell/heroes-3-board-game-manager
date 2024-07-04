import React, { useState } from 'react';
import MenuList from "../components/MenuList";
import MenuBackground from '../assets/images/backgroundimages/main/MainMenu.gif';
import MainTheme from '../assets/audio/music/00maintheme.mp3';
import Btn from '../components/Button';
import '../assets/styles/MainMenu.css';

import Modal from '../components/Modal';
import '../assets/styles/Modal.css'

import IngameMenu from '../assets/images/icons/ingame/IngameMenu.png';

function MainMenu() {
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
