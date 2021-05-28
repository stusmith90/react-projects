import React, { useContext } from 'react';
import { AppContext } from '../context/GlobalContext';
import { Types } from "../context/reducers";
const Search = () => {

    const { state, dispatch } = useContext(AppContext);

    const add = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
        const target = e.target as HTMLTextAreaElement;
        dispatch({
            type: Types.Add,
            payload: {
              id: state.todos?.length,
              text: target.value,
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