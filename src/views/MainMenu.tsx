import React, { useEffect } from 'react';
import { useBackground } from '../services/contexts/BackgroundContext';
import MainMenuBackground from '../assets/images/backgroundimages/main/MainMenu.png';
import MainMenuList from '../components/buttons/buttonlists/MainMenuList';
import MainTheme from '../assets/audio/music/00maintheme.mp3';
import Btn from '../components/buttons/Button';

import Modal from '../components/Modal';
import '../assets/styles/Modal.css'


function MainMenu() {
  const { setBackground } = useBackground();

  useEffect(() => {
    setBackground(MainMenuBackground);
  }, [setBackground]);

  return (
    <MainMenuList />
  );
}

export default MainMenu;