import React, { Component } from 'react';
import "./styles.css"

export default class Nota extends Component {
    render(){
        return(
            <section className="CardNota">
            <header className="Titulo">
              <h3>Titulo</h3>
            </header>
            <p>Escreva sua nota</p>
          </section>
        )
    }
}