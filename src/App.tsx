// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';
import './assets/styles/App.css';
import './assets/styles/Modal.css'

import MainMenu from './views/MainMenu';
import CampaignMenu from './views/CampaignMenu';
import ScenarioMenu from './views/ScenarioMenu';
import MultiplayerMenu from './views/MultiplayerMenu';
import Ingame from './views/Ingame';
import MusicPlayer from './components/MusicPlayer';

import MainTheme from './assets/audio/music/00maintheme.mp3';

const routes = [
  { path: '/', element: <MainMenu /> },
  { path: '/scenario', element: <ScenarioMenu /> },
  { path: '/multiplayer', element: <MultiplayerMenu /> },
  { path: '/campaign-roe', element: <CampaignMenu /> },
  { path: '/campaign-ab', element: <CampaignMenu /> },
  { path: '/campaign-sod', element: <CampaignMenu /> },
  { path: '/ingame', element: <Ingame /> },
];

function App() {
  const mainTheme = [MainTheme];
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isVisible={isModalVisible} onClose={toggleModal} />
      <MusicPlayer playlist={mainTheme} initialIsPlaying={false} />
    </>
  );
}

export default App;
