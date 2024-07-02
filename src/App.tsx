// App Component
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/styles/App.css';

import MainMenu from './views/MainMenu';
import CampaignMenu from './views/CampaignMenu';
import ScenarioMenu from './views/ScenarioMenu';
import MultiplayerMenu from './views/MultiplayerMenu';
import Ingame from './views/Ingame';

const routes = [
  { path: '/',              element: <MainMenu/> },
  { path: '/scenario',      element: <ScenarioMenu/> },
  { path: '/multiplayer',   element: <MultiplayerMenu/> },
  { path: '/campaign-roe',  element: <CampaignMenu/> }, 
  { path: '/campaign-ab',   element: <CampaignMenu/> }, 
  { path: '/campaign-sod',  element: <CampaignMenu/> }, 
  { path: '/ingame',        element: <Ingame/> }, 
]

function App() {
  return (
    <div className="main-content">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
