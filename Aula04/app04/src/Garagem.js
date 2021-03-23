import React from 'react';
import Carro from './Carro';

class Garagem extends React.Component {
    render() {
        const info_carro = {nome: "Ford", modelo: "Mustang"};
        return(
            <div>
                <h1>Quem mora em minha Garagem?</h1>
                <Carro marca={info_carro} />
            </div>
        );
    }
}

export default Garagem;