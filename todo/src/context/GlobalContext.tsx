import React, { createContext, useReducer } from 'react';
import { reducers } from './reducers';

import { TodoActions } from './reducers';

type stateAttr = {
  id: number;
  text: string;
  completed: boolean;
};

type InitialStateType = {
  todos: stateAttr[];
};

const initialState = {
  todos: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<TodoActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ todos }: InitialStateType, action: TodoActions) => ({
  todos: reducers(todos, action),
});

const AppProvider: React.FC = ({ children }) => {
// @ts-ignore
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
