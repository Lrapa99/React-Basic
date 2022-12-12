import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const init = (initialState) => {
  return {
    count: initialState.count + 100,
  };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.RESET:
      return initialState;
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.DECREMENT_5:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const Contador = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  // const sumar = () => setCount(count + 1);
  // const restar = () => setCount(count - 1);

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const reset = () => dispatch({ type: TYPES.RESET });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducers</h2>
      <nav>
        <button onClick={sumar}>sumar +</button>
        <button onClick={restar}>restar -</button>
        <button onClick={reset}>reset 0</button>
        <button onClick={sumar5}>sumar 5+</button>
        <button onClick={restar5}>restar 5 -</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default Contador;
