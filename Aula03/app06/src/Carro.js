import React from 'react';

class Carro extends React.Component {
    constructor(props) {
        console.log("Carro - constructor()");
        super(props);
        this.state = {
            cor: "amarelo"
        };
    }
    render() {
        console.log("Carro - render()");
        return <h2>Eu tenho um Carro {this.state.cor}!</h2>
    }
}

export default Carro;