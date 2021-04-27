import React from 'react';

class MeuFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nomeUsuario: ''};
  }

  meuManipuladorEnvio = (event) => {
    // Evita que um link abra uma URL.
    event.preventDefault();
    alert("Você está enviando " + this.state.nomeUsuario);
  }

  meuManipuladorMudanca = (event) => {
    this.setState({nomeUsuario: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.meuManipuladorEnvio}>
        <h1>Olá, {this.state.nomeUsuario}</h1>
        <p>Digite o seu nome e envie: </p>
        <input type="text" onChange={this.meuManipuladorMudanca} />
        <input type="submit" />
      </form>
    );
  }
}

export default MeuFormulario;