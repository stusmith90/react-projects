import React, { useContext } from 'react';
import Questions from './components/Questions';
import questions from './questions.json';
import { GlobalContext } from './context/AppContext';

function App() {
  const {counter}: any = useContext(GlobalContext);
  const [count] = counter;
  return (
    <div className="quiz">
      <div className="quiz__container">
        <Questions questions={questions[count]} />
      </div>
    </div>
  );
}

export default App;
