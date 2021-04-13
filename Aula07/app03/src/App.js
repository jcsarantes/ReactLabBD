import React from 'react';

class Futebol extends React.Component {
  lancar = () => {
    // A palavra-chave "this" refere-se ao objeto do componente.
    alert(this);
  }

  render() {
    return (
      <button onClick={this.lancar}>Tente o lance!</button>
    );
  }
}

export default Futebol;