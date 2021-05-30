import React, { useContext } from 'react';
import { AppContext } from '../context/GlobalContext';
import { Types } from '../context/reducers';

const List = () => {
  const { state, dispatch } = useContext(AppContext);

  const deleteTodo = (id: number) => {
    dispatch({
      type: Types.Delete,
      payload: {
        id,
      },
    });
  };

  const completedTodo = (id: number, text: any) => {
    dispatch({
        type: Types.Complete,
        payload: {
          id,
          text,
          completed: true
        },
      });
  }

  return (
    <div>
      <ul>
        {state.todos.map((todo, index) => (
          <>
          <li style={{ textDecoration: todo.completed ? "line-through" : ""}} key={index}>{todo.text}</li>
            <button onClick={() => deleteTodo(todo.id)}>
              DELETE
            </button>
            <button onClick={() => completedTodo(todo.id, todo.text)}>
                Completed
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
