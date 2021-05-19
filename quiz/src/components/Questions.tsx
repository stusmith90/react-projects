import React from 'react';

type Iprops = {
  [questions: string]: any;
};

function Questions({ questions }: Iprops) {
  return (
    <>
      <h2 id="question">{questions.question}</h2>
      <ul>
        <li>
          <input type="radio" id="a" name="answer"></input>
          <label id="a_text">{questions.a}</label>
        </li>
        <li>
          <input type="radio" id="b" name="answer"></input>
          <label id="b_text">{questions.b}</label>
        </li>
        <li>
          <input type="radio" id="c" name="answer"></input>
          <label id="c_text">{questions.c}</label>
        </li>
        <li>
          <input type="radio" id="d" name="answer"></input>
          <label id="d_text">{questions.d}</label>
        </li>
      </ul>
    </>
  );
}

export default Questions;
