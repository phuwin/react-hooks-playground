import './App.css';
import React, { createContext } from 'react';
import CounterUseRef from './CounterUseRef';

export const Context = createContext();

function App() {
  return (
    <>
      <CounterUseRef />
    </>
  );
}

export default App;
