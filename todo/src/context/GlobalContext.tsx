import React, { createContext, useReducer } from 'react';
import types, { Action } from './types';

type ProductType = {
  id: number;
  text: string;
  completed: boolean;
};

type State = {
  todos: ProductType[];
  filter: string;
};

const initialState = {
  todos: [],
  filter: 'all',
};

interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext({} as ContextProps);

const { Provider } = AppContext;

const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case types.ADD:
          return { ...state, todos: [...state.todos, action.payload] };
        case types.DELETE:
          return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload.id),
          };
        case types.COMPLETE:
          state.todos[action.payload.id].completed = action.payload.completed;
          return { ...state };
        case types.FILTER:
          return { ...state, filter: action.payload.filter };
          case types.CLEAR:
          return {
            ...state,
            todos: state.todos.filter((todo) => todo.completed !== true),
          };
        default:
          return state;
      }
    },
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { AppContext, AppProvider };
