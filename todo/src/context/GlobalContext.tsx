
import React, { createContext, useReducer } from 'react';
import { counters } from './reducers';

type InitialStateType = {
  counter: number;
}

const initialState = {
  counter: 0,
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ counter }: InitialStateType, action: any) => ({
  counter: counters(counter, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };