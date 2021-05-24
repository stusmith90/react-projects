import React, { createContext, useState } from 'react';

const GlobalContext = createContext({});

const AppContextProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <GlobalContext.Provider
      value={{ counter: [count, setCount], results: [result, setResult] }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, AppContextProvider };
