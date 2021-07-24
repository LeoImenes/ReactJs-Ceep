import React, { Component } from "react";
import Nota from "../CardNota/Nota";

export class ListadeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho","Estudos","Piadas").map((categoria, index) => {return(
          <li key={index}>
            <div>{categoria}</div>
            <Nota />
          </li>
        )
  })}
     
</ul>
    );
  }
}
