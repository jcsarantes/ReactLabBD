import React from 'react';
import Carro from './Carro';

class Garagem extends React.Component {
    render() {
        return (
            <div>
                <h1>Quem mora na minha Garagem?</h1>
                <Carro />
            </div>
        );
    }
}

export default Garagem;