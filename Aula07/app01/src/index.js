import React from 'react';
import ReactDOM from 'react-dom';

function lancar() {
  alert("Bom lance!");
}

const meuElemento = (
  <button onClick={lancar}>Tente o lance!</button>
);

ReactDOM.render(meuElemento, document.getElementById('root'));





