import React from 'react';
import Carro from './Carro';

class Garagem extends React.Component {
    render() {
        return(
            <div>
                <h1>Quem mora em minha Garagem?</h1>
                <Carro marca="Ford" />
            </div>
        );
    }
}

export default Garagem;