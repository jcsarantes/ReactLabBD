import React from 'react';
import Carro from './Carro';

class Garagem extends React.Component {
    render() {
        const nome_Carro = "Ford";
        return(
            <div>
                <h1>Quem mora em minha garagem?</h1>
                <Carro marca={nome_Carro} />
            </div>
        );
    }
}

export default Garagem;