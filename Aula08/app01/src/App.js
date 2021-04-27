import React from 'react';

class MeuFormulario extends React.Component {
  render() {
    return (
      <form>
        <h1>Olá</h1>
        <p>Digite o seu nome: </p>
        <input type="text" />
      </form>
    );
  }
}

export default MeuFormulario;