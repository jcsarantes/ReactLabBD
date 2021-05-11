import React from 'react';

class MeuCabecalho extends React.Component {
  render() {
    const meuEstilo = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return(
      <div>
        <h1 style={meuEstilo}>Olá Estilo!</h1>
        <p>Adicione um pouco de estilo.</p>
      </div>
    );
  }
}

export default MeuCabecalho;