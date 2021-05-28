import React, {useContext} from 'react';
import { AppContext } from '../context/GlobalContext';

const List = () => {
    const { state } = useContext(AppContext);
    return (
        <div>
            <ul>
            {state.todos.map((todo, index) => 
                <li key={index}>{todo.text}</li>
            )}
            </ul>
        </div>
    );
};

export default List;