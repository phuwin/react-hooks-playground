import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter</h1>  
      <p>{count}</p>
      <button onClick={() => { setCount((previousCount)=>{return previousCount + 2}) }}>
        Increment
      </button>
    </>
  );
}

export default Counter;