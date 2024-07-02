import React, { useState } from 'react';
import MenuList from "../components/MenuList";
import MenuBackground from '../assets/images/backgroundimages/MainMenu.png';
import MainTheme from '../assets/audio/music/00maintheme.mp3';
import AudioPlayer from 'react-h5-audio-player';
import Btn from '../components/Button';
import 'react-h5-audio-player/lib/styles.css';
import '../assets/styles/MainMenu.css';

import IngameMenu from '../assets/images/icons/ingame/IngameMenu.png';

function MainMenu() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    console.log("isPlaying:"+{isPlaying});
    setIsPlaying(!isPlaying);
    console.log("isPlaying:"+{isPlaying});
  };

  return (
    <>
      <img src={MenuBackground} alt="Background" className="background-image" />
      <div className='main-menu'>
        <div className='menu-container'>
          <MenuList />
        </div>
        <button onClick={handleButtonClick}>Toggle sound</button>
      </div>
      {isPlaying && (
        <AudioPlayer
          autoPlay
          src={MainTheme}
          loop
          showSkipControls={true}
          showFilledProgress={true}
          showJumpControls={true}
        />
      )}
      
    </>
  );
}

export default MainMenu;
