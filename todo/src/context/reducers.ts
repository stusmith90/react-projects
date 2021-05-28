/*reducers.ts*/

type reducerParams = {
  action: Object
  type: string
}

export const counters = (state: any, action: reducerParams) => {
    switch (action.type) {
      case 'ADD':
        return state + 1;
    }
  }