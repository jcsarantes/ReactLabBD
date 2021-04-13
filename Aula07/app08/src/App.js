import React from 'react';

class Futebol extends React.Component {
  lancar(a, b) {
    /* 
      "b" representa o evento React que acionou a 
      função, nesse caso, o evento "click".
    */
    alert(b.type);
  }

  render() {
    return(
      <button onClick={this.lancar.bind("this", "Gol!!!")}>
        Tente o lance!
      </button>
    );
  }
}

export default Futebol;