import React, { Component } from "react";

import "./App.css";
import { ListadeNotas } from "./components/ListadeNota/ListaDeNotas";
import { FormCadastro } from "./components/FormCadastro";

class App extends Component {
  render() {
    return (
      <section>
        <FormCadastro />
        <ListadeNotas />
      </section>
    );
  }
}

export default App;
