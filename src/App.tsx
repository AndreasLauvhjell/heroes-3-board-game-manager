// App Component
import React from 'react';
import MainMenu from './views/MainMenu';
import NavBar from './components/NavBar';
import MenuBackground from './assets/images/title.png'
import './App.css';


function App() {
  return (
    <div className="main-content">
      <img src={MenuBackground} alt="Background" className="background-image"></img>
      <MainMenu />
    </div>
  );
}

export default App;
