import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  restar,
  restar5,
  sumar,
  sumar5,
} from "../actions/contadorActions";

const Contador = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={() => dispatch(sumar())}>sumar +</button>
        <button onClick={() => dispatch(restar())}>restar -</button>
        <button onClick={() => dispatch(sumar5())}>sumar5 +</button>
        <button onClick={() => dispatch(restar5())}>restar5 -</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
