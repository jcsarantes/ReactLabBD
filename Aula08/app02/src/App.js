import React from 'react';

class MeuFormulario extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      nomeUsuario: ''
    };
  }

  meuManipuladorMudanca = (event) => {
    console.log("meuManipuadorMudanca");
    // event.target.value: define ou retorna o valor de um atributo.
    this.setState({nomeUsuario: event.target.value});
  }

  render(){
    console.log("render");
    return (
      <form>
        <h1>Olá, {this.state.nomeUsuario}</h1>
        <p>Digite o seu nome:</p>
        <input type="text" onChange={this.meuManipuladorMudanca} />
      </form>
    );
  }
}

export default MeuFormulario;