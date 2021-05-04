import React from 'react';

class MeuFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: 'O conteúdo de uma textarea deve ser inserido no atributo value.'
    };
  }

  render() {
    return(
      <form>
        <textarea value={this.state.descricao} rows="4" cols="20" />
      </form>
    );
  }
}

export default MeuFormulario;