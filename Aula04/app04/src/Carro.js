import React from 'react';

class Carro extends React.Component {
    render() {
        return <h2>Eu sou um {this.props.marca.modelo}!</h2>
    }
}

export default Carro;