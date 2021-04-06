import React from 'react';

class App extends React.Component {

  // Montando (mounting).
  constructor(props) {
    super(props);
    this.state={
      nome:"João"
    };
    console.log("constructor");
  }

  // Montando (mounting).
  componentDidMount() {
    console.log("componentDidMount - Montado");
  }

  // Atualizando (updating).
  componentDidUpdate() {
    console.log("componentDidUpdate - Atualizado");
  }

  /*
   Desmontando (unmounting).
   Qualquer limpeza necessária deve ser realizada neste método, 
   como invalidar timers, cancelar requisições de rede, ou limpar 
   qualquer subscrição que foi criada no componentDidMount().
   */
  componentWillUnmount() {
    console.log("componentWillUnmount - Desmontando");
  }

  alterar = () => {
    // Atualizando - o componente será renderizado novamente.
    this.setState({nome: "Maria"});
  }

  // Montando (mounting) e atualizando (updating).
  render() {
    console.log("render");
    return (
      <div>
        Olá, {this.state.nome}!<br/><br/>
        <div>
          <button onClick={this.alterar}>Alterar</button>
        </div>
      </div>
    );
  }
}

export default App;