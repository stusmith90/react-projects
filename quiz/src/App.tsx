import React from 'react';
import Questions from './components/Questions';

import questions from './questions.json';

function App() {
  let currentQuestion = 0
  return (
    <div className="quiz">
      <div className="quiz__container">
        <Questions questions={questions[currentQuestion]} />
    </div>
    </div>
  );
}

export default App;
