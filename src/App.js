import './App.css';
import Counter from './Counter';
import React, { useState, createContext, useMemo } from 'react';

export const Context = createContext();

const expensiveCalculation = (text) => {
  console.log(text, "get called");
  let now = performance.now();
  // Artificial delay -- do nothing for 100ms
  while (performance.now() - now < 100) { }
  return text;
};

function App() {
  const [countContext, setCountContext] = useState(0);
  // only called once since dependency list is an empty array
  const expensiveOnce = useMemo(() => expensiveCalculation('expensiveOnce'), []);
  // called everytime countContext changes
  const expensiveOnRendered = expensiveCalculation('expensiveOnRendered');
  return (
    <Context.Provider value={{ countContext, setCountContext }}>
      <p>{expensiveOnRendered}</p>
      <p>{expensiveOnce}</p>
      <Counter />
    </Context.Provider>
  );
}

export default App;
