import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  return (
    <GlobalStateContext.Provider value={{ loggedIn, setLoggedIn, error, setError }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
