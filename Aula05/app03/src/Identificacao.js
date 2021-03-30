import React from 'react';
import Nome from  './Nome';
import Idade from './Idade';

class Identificacao extends React.Component {
    constructor(props) {
        super(props);
        console.log("Identificacao - constructor()");
        this.state = {
            nome: "Carla Alves",
            idade: "25"
        };
    }

    componentDidMount() {
        console.log("componentDidMount()");
        this.setState({nome: "João Alves"});
    }

    render() {
        console.log("Identificacao - render()");
        return (
            <div>
                <h3><Nome nome={this.state.nome} /></h3>
                <h3><Idade idade={this.state.idade} /></h3>
            </div>
        );
    }   
}

export default Identificacao;