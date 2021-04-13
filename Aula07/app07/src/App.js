// Com arrow function.
import React from 'react';

class Futebol extends React.Component {
  lancar = (a, b) => {
    /* 
      "b" representa o evento React que acionou a 
      função, nesse caso, o evento "click".
    */
    alert(b.type);
  }

  render() {
    return(
      <button onClick={(ev) => this.lancar("Gol!!!", ev)}>
        Tente o lance!
      </button>    
    );
  }
}

export default Futebol;
