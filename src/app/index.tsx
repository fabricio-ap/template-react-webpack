import React, { useState } from 'react';
import { sum } from './helpers';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleClickSum = () => setCount(sum(count));

  return (
    <div>
      <h4>Template React Webpack</h4>
      <div>
        <div>Número: {count}</div>
        <button onClick={handleClickSum}>+</button>
      </div>
    </div>
  );
};

export default App;
