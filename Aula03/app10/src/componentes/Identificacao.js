import React from 'react';
import Nome from './Nome';
import Sobrenome from './Sobrenome';

class Identificacao extends React.Component {
    render() {
        return(
            <div>
                <Nome />
                <Sobrenome />
            </div>
        );
    }
}

export default Identificacao;