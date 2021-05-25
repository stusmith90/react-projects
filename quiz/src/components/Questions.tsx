import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/AppContext';

interface Iprops {
  [questions: string]: any;
};

const Questions = ({ questions }: Iprops) => {
  const [answer, setAnswer] = useState('');
  const { counter, results }: any = useContext(GlobalContext);
  const [count, setCount] = counter;
  const [result, setResult] = results;

  const handleSubmit = (e : any) => {
    e.preventDefault();
    e.target.reset();

    setCount(count + 1);
    if (questions.correct === answer) {
      setResult(result + 1);
    }
  };

  return (
    <>
      <h2 id="question">{questions.question}</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              value="a"
              type="radio"
              id="a"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
            ></input>
            <label id="a_text">{questions.a}</label>
          </li>
          <li>
            <input
              value="b"
              type="radio"
              id="b"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
            ></input>
            <label id="b_text">{questions.b}</label>
          </li>
          <li>
            <input
              value="c"
              type="radio"
              id="c"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
            ></input>
            <label id="c_text">{questions.c}</label>
          </li>
          <li>
            <input
              value="d"
              type="radio"
              id="d"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
            ></input>
            <label id="d_text">{questions.d}</label>
          </li>
        </ul>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Questions;
