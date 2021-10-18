import './App.css';
import Counter from './Counter';
import React, { useState, createContext } from 'react';
export const Context = createContext();

function App() {
  const [countContext, setCountContext] = useState(0);
  return (
    <Context.Provider value={{ countContext, setCountContext }}>
      <Counter />
    </Context.Provider>
  );
}

export default App;
