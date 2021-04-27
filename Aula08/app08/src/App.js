import React from 'react';

class MeuFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeUsuario: '',
      idade: null,
      mensagemErro: '',
    };
  }

  meuManipuladorMudanca = (event) => {
    let nome = event.target.name;
    let valor = event.target.value;
    let erro = '';
    if (nome === "idade") {
      if (valor != "" && !Number(valor)) {
        erro = <strong>A sua idade deve ser um número.</strong>
      }
    }
    this.setState({mensagemErro: erro});
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
        {this.state.mensagemErro}
      </form>
    );
  }
}

export default MeuFormulario;