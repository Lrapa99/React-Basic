import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h1>useReducers</h1>
      <a
        href="https://es.reactjs.org/docs/hooks-reference.html#usereducer"
        target={`_blank`}
        rel={`noreferrer`}
      >
        Documentacion
      </a>
      <hr />
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
