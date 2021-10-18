import { useEffect } from 'react';

export default function useEffectExample(count){
  useEffect(() => {
    console.log('on render');
    return () => {
      console.log('on before unmount')
    }
  });
  useEffect(() => {
    console.log('on first mount');
    return () => {
      console.log('on last unmount');
    }
  }, []);
  useEffect(() => {
    console.log('on count changed');
    return () => {
      console.log('on before count changed');
    }
  }, [count]);
};