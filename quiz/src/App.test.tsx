import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { GlobalContext } from './context/AppContext';
import Questions from './components/Questions';
import questions from './questions.json';
import Results from './components/Results';

const setup = (counter:number, results:number) => {
  const wrapper = ({ children }: any) => (
    <GlobalContext.Provider value={{ counter: [counter], results: [results] }}>
      {children}
    </GlobalContext.Provider>
  );
  return wrapper;
};

test('Testing the first questions loads', () => {
  const wrapper = setup(0, 0);
  const utils = render(<App />, { wrapper });
  expect(
    utils.getByText('What is the most used programming language in 2019?')
  ).toBeInTheDocument();
});

test('Check the values are working correctly', () => {
  const wrapper = setup(0, 0);
  const count = 0;
  const utils = render(<Questions questions={questions[count]} />, { wrapper });
  const input = utils.getByLabelText('Java');
  fireEvent.change(input, { target: { value: 'a' } });
  // @ts-ignore
  expect(input.value).toBe('a');
});

test('Testing the results page and showing the correct score', () => {
  const count = 4;
  const result = 4;
  const totalQuestions = questions.length;
  const wrapper = setup(count, result);
  const { getByText } = render(<Results total={totalQuestions} />, { wrapper });
  expect(getByText(`You scored a total ${count} out of ${totalQuestions}`))
})


