import React  from 'react';

class Futebol extends React.Component {
  lancar() {
    alert("Grande lance!");
  }

  render() {
    return(
      <button onClick={this.lancar}>Tente o lance!</button>
    );    
  }
}

export default Futebol;