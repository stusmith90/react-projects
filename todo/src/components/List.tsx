import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/globalContext';
import types from '../context/types';

interface StateProvider {
  id: number;
  text: string;
  completed: boolean;
}

const List = () => {
  const { state, dispatch } = useContext(AppContext);
  const [todos, setTodos] = useState<StateProvider[]>([]);

  useEffect(() => {
    const filter = state.filter;
    setTodos(state.todos)
    if(filter === "completed"){
     const todosCompleted = state.todos.filter(todo => todo.completed === true)
     setTodos(todosCompleted);
    }
    if(filter === "active"){
      const todosActive = state.todos.filter(todo => todo.completed !== true)
      setTodos(todosActive);
     }
  },[state])

  const deleteTodo = (id: number) => {
    dispatch({
      type: types.DELETE,
      payload: {
        id,
      },
    });
  };

  const completedTodo = (id: number, text: string) => {
    dispatch({
      type: types.COMPLETE,
      payload: {
        id,
        text,
        completed: !state.todos[id].completed,
      },
    });
  };
  return (
    <div className="list">
      <ul className="list__todos">
        {todos && todos.map((todo, index) => (
          <>
            <li className="list__todos-text"
              style={{ textDecoration: todo.completed ? 'line-through' : '' }}
              key={index}
            >
              {todo.text}
            </li>
            <button className="list__todos-delete" onClick={() => deleteTodo(todo.id)}>DELETE</button>
            <button className="list__todos-completed" onClick={() => completedTodo(index, todo.text)}>
              Completed
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
