import React from 'react';

class Carro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marca: "Ford", 
            modelo: "Mustang",
            cor: "vermelho",
            ano: 1964,
        };
    }

    render() {
        return (
            <div>
                <h1>Meu {this.state.marca}</h1>
                <p>
                    Ele é um {this.state.modelo} {this.state.cor} de {this.state.ano}.
                </p>
            </div>
        );
    }
}

export default Carro;