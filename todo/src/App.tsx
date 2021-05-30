import React from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';

function App() {
  return (
    <div className="todo">
      <h1>TODOS</h1>
      <Search />
      <List />
    </div>
  );
}

export default App;
