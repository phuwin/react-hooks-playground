import React, { useState, useEffect, useCallback, memo } from 'react';

// memo prevent re-rendering if props don't change
export const ButtonWithRender = memo(({ onClick, children }) => {
  useEffect(() => {
    console.log("rendered", children);
  });
  return (
    <button onClick={onClick}>{children}</button>
  );
});

function CounterUseCallback() {
  const [count, setCount] = useState(0);
  const onClickCallback = useCallback(() => {
    setCount(count => count + 1);
  }, [setCount]);
  return (
    <>
      <h1>Counter usecallback</h1>
      <p>{count}</p>
      <ButtonWithRender onClick={() => { setCount(count + 1) }}>
        Increment that rerender
      </ButtonWithRender>
      <ButtonWithRender onClick={onClickCallback}>
        Increment that doesn't rerender
      </ButtonWithRender>
    </>
  );
}

export default CounterUseCallback;