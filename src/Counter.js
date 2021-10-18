import { useState } from 'react';
import useEffectExamples from './useEffectExamples';

function Counter() {
  const [count, setCount] = useState(0);
  useEffectExamples(count);
  return (
    <>
      <h1>Counter</h1>  
      <p>{count}</p>
      <button onClick={() => { setCount(count + 1) }}>
        Increment
      </button>
    </>
  );
}

export default Counter;