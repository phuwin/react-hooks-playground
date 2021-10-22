
import React, { useState, useRef, useEffect} from 'react';


function CounterUseRef() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const countRef = useRef(0);
  useEffect(()=>{
    console.log('countRef', countRef.current);
  });
  return (
    <>
      <h1>Counter Input</h1>  
      <p>{count}</p>
      <input ref={inputRef} value="1"/>
      <button onClick={() => { setCount(count + Number(inputRef.current.value)) }}>
        Increment
      </button>
      <button onClick={() => {countRef.current++}}>
        Increase count ref
      </button>
    </>
  );
}

export default CounterUseRef;