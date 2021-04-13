import React from 'react';

class Futebol extends React.Component {
  lancar = (a) => {
    alert(a);
  }

  render() {
    // Utilizando uma arrow function anômima.
    return(
      <button onClick={() => this.lancar("Gol!!!")}>
        Tente o lance!
      </button>
    );
  }
}

export default Futebol;