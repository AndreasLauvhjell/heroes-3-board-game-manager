import React from 'react';
import { useBackground } from '../services/contexts/BackgroundContext';

function BackgroundImageWrapper({ children }) {
  const { background } = useBackground();

  return (
    <div id="root" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {children}
    </div>
  );
}

export default BackgroundImageWrapper;
