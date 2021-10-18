
import { useState, useContext } from 'react';
import { Context } from './App';
import useEffectExample from './useEffectExamples';

function Counter() {
  const [count, setCount] = useState(0);
  const { countContext, setCountContext } = useContext(Context);
  useEffectExample(count);
  return (
    <>
      <h1>Counter</h1>  
      <p>Count Context:{countContext}</p>
      <p>{count}</p>
      <button onClick={() => { setCount(count + 1) }}>
        Increment local
      </button>
      <button onClick={() => { setCountContext(countContext + 1) }}>
        Increment context
      </button>
    </>
  );
}

export default Counter;