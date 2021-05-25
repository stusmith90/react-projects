import React, { useContext } from 'react';
import Questions from './components/Questions';
import questions from './questions.json';
import { GlobalContext } from './context/AppContext';
import Results from './components/Results';
import './App.css'

function App() {
  const { counter }: any = useContext(GlobalContext);
  const [count] = counter;
  const totalQuestions = questions.length;
  return (
    <div className="quiz">
      {count === 4 ? (
        <div className="quiz__results">
          <Results total={totalQuestions} />
        </div>
      ) : (
        <div className="quiz__container">
          <Questions questions={questions[count]} />
        </div>
      )}
    </div>
  );
}

export default App;
