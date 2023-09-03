import { useReducer } from 'react';
import counterReducers from './CounterReducer';

const Counter = () => {
  const [value, dispacth] = useReducer(counterReducers,0)

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispacth({type:'INCREMENT'})}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispacth({type:'RESET'})}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
