import React from 'react';

class Futebol extends React.Component {
  constructor(props) {
    super(props);
    this.lancar = this.lancar.bind(this);
  }
  
  lancar() {
    /* 
     Devido à ligação (binding) da função no construtor, a 
     palavra-chave "this" agora refere-se ao objeto do 
     componente.
    */
    alert(this);
  }
  
  render() {
    return(
      <button onClick={this.lancar}>
        Tente o lance!
      </button>
    );
  }
}

export default Futebol;