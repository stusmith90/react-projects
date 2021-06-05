import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/globalContext';
import types from '../context/types';

const Filter = () => {
  const { state, dispatch } = useContext(AppContext);
  const [todosLeft, setTodosLeft] = useState<number>(0);

  useEffect(() => {
    const todoFilter = state.todos.filter((todo) => todo.completed !== true);
    const todosLeft = todoFilter.length;
    setTodosLeft(todosLeft);
  }, [state]);

  const filterClick = (e: any) => {
    const targetId = e.target.id;
    if (targetId === 'clear') {
      dispatch({
        type: types.CLEAR,
      });
    } else {
      dispatch({
        type: types.FILTER,
        payload: {
          filter: targetId,
        },
      });
    }
  };

  return (
    <>
      {state.todos?.length > 0 && (
        <div className="filter">
          <p>Items left: {todosLeft}</p>
          <ul className="filter__list">
            <li id="all" className="filter__list-all" onClick={filterClick}>
              All
            </li>
            <li
              id="active"
              className="filter__list-active"
              onClick={filterClick}
            >
              Active
            </li>
            <li
              id="completed"
              className="filter__list-completed"
              onClick={filterClick}
            >
              Completed
            </li>
            <li id="clear" className="filter__list-clear" onClick={filterClick}>
              Clear completed
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Filter;
