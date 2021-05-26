import React, { useContext } from 'react';
import { GlobalContext } from '../context/AppContext';

interface IProps {
  total: number;
}

const Results = ({ total }: IProps) => {
  const { results }: any = useContext(GlobalContext);
  const [result] = results;
  return (
    <div>
      <h2>Results:</h2>
      <p>
        You scored a total {result} out of {total}
      </p>
    </div>
  );
};

export default Results;
