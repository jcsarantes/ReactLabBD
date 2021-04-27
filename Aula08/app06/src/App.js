import React from 'react';

class MeuFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeUsuario: '',
      idade: null,
    };
  }

  meuManipuladorMudanca = (event) => {
    let nome = event.target.name;
    let valor = event.target.value;
    console.log("atributo name: " +nome);
    console.log("valor digitado: " +valor);
    if (nome === "idade") {
      if (!Number(valor)) { 
        alert("A sua idade deve ser um número.");
      }
    }
    this.setState({[nome]: valor});
  }

  render() {
    return (
      <form>
        <h1>Olá, {this.state.nomeUsuario} {this.state.idade}</h1>
        <p>Digite o seu nome:</p>
        <input type="text" name="nomeUsuario" onChange={this.meuManipuladorMudanca} />
        <p>Digite a sua idade:</p>
        <input type="text" name="idade" onChange={this.meuManipuladorMudanca} />
      </form>
    );
  }
}

export default MeuFormulario;
