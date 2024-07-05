// CampaignMenu Component
import React, { useState, useEffect } from 'react';
import { useBackground } from '../services/contexts/BackgroundContext';
import ScenarioBackground from '../assets/images/backgroundimages/scenario/ScenarioMenu.png'
import MainButtonsList from '../components/buttons/buttonlists/scenariomenu/MainButtonsList'
import '../assets/styles/ScenarioMenu.css'

function ScenarioMenu() {
  const { setBackground } = useBackground();
  const [scenario, setScenario] = useState<Scenario | null>(null);
  
  useEffect(() => {
    setBackground(ScenarioBackground);
  }, [setBackground]);

  return (
    <>
      <MainButtonsList />
    </>
  );
}

export default ScenarioMenu;
