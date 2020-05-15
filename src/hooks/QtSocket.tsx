import React, {createContext, useContext, useState} from 'react';

const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode: (value: boolean) => {},
});

export const QtSocket = (props: any) => {
  const [darkMode, setDarkMode] = useState(false);
  const [state, setState] = useState({isStopped: false, isPaused: false});

  function toggleDarkMode(state: boolean = false) {
    setDarkMode((darkMode) => state);
  }

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  return {
    darkMode,
    toggleDarkMode,
  };
};
