import './App.css';
import Counter from './Counter';
import CounterClass from './CounterClass';
import React, { useState, createContext } from 'react';
export const Context = createContext();

function App() {
  const [countContext, setCountContext] = useState(0);
  return (
    <Context.Provider value={{ countContext, setCountContext }}>
      <Counter />
      <CounterClass />
    </Context.Provider>
  );
}

export default App;
