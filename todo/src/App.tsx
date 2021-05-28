import React, {useContext} from 'react';
import './App.css';
import Search from './components/Search';
import { AppContext } from './context/GlobalContext'

function App() {
  const { state, dispatch } = useContext(AppContext);
  const help = () => {
    dispatch({type: 'ADD'});
    console.log(state);
  }
  return (
    <div className="todo">
      <button onClick={help} >help</button>
    <h1>TODOS</h1>
    <Search />
    </div>
  );
}

export default App;
