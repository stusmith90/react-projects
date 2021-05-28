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
  Complete = 'COMPLETE'
}

type TodoType = {
  id: number;
  text: string;
};

type Action = {
  [Types.Add]: {
    id: number;
    text: string;
  };
  [Types.Update]: {
    id: number;
    text: string;
  };
  [Types.Delete]: {
    id: number;
    text: string;
  };
  [Types.Complete]: {
    id: number;
    text: string;
  };
};

export type TodoActions = ActionMap<Action>[keyof ActionMap<Action>];

export const reducers = (state: TodoType[], action: TodoActions) => {
  switch (action.type) {
    case Types.Add:
      return [...state, { text: action.payload.text, id: action.payload.id }];
      case Types.Update:
      return [...state, { text: action.payload.text, id: action.payload.id }];
      case Types.Delete:
      return [...state, { text: action.payload.text, id: action.payload.id }];
      case Types.Complete:
      return [...state, { text: action.payload.text, id: action.payload.id }];
  }
};
