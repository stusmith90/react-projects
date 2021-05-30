type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Add = 'ADD',
  Update = 'UPDATE',
  Delete = 'DELETE',
  Complete = 'COMPLETE',
}

type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

type Action = {
  [Types.Add]: {
    id: number;
    text: string;
    completed: boolean;
  };
  [Types.Update]: {
    id: number;
    text: string;
    completed: boolean;
  };
  [Types.Delete]: {
    id: number;
  };
  [Types.Complete]: {
    id: number;
    text: string;
    completed: boolean;
  };
};

export type TodoActions = ActionMap<Action>[keyof ActionMap<Action>];

export const reducers = (state: TodoType[], action: TodoActions) => {
  switch (action.type) {
    case Types.Add:
      return [
        ...state,
        {
          text: action.payload.text,
          id: action.payload.id,
          completed: action.payload.completed,
        },
      ];
    case Types.Delete:
      return state.filter((todo) => todo.id !== action.payload.id);
    case Types.Complete:
      state[action.payload.id].completed = action.payload.completed;
      return [...state];
  }
};
