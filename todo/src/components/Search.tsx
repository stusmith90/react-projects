import React, { useContext } from 'react';
import { AppContext } from '../context/globalContext';
import types from "../context/types";

const Search = () => {
    const { state, dispatch } = useContext(AppContext);

    const add = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
        const target = e.target as HTMLTextAreaElement;
        dispatch({
            type: types.ADD,
            payload: {
              id: state.todos?.length,
              text: target.value,
              completed: false,
            }
          });
        }
    }
    return (
        <div className="search">
            <input type="text" placeholder="What needs to be done?" onKeyDown={add}></input>
        </div>
    );
};

export default Search;