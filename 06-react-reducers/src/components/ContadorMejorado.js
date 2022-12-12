import React, { useReducer } from "react";
import { TYPES } from "../actions/countActions";
import {
  countInit,
  countInitialState,
  countReducer,
} from "../reducers/countReducer";

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    countReducer,
    countInitialState,
    countInit
  );

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const reset = () => dispatch({ type: TYPES.RESET });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Mejorado Reducers</h2>
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

export default ContadorMejorado;
