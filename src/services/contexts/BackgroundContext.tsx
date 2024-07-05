import React, { createContext, useContext, useState } from 'react';
import { BackgroundContextType, BackgroundProviderProps } from '../../models/interfaces';

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const useBackground = () => useContext(BackgroundContext);

export const BackgroundProvider = ({ children }: BackgroundProviderProps) => {
  const [background, setBackground] = useState<string>('');

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};
