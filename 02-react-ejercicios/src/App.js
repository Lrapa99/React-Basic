import React from "react";
import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import Modals from "./components/Modals";
import SelectsAnidados from "./components/SelectsAnidados";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h2>EJERCICIOS CON REACT</h2>
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}

export default App;
