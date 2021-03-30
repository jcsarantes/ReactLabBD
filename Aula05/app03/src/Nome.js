import React from 'react';

class Nome extends React.Component {

    render() {
        console.log("Nome - render()");
        return (
            <p>Nome: {this.props.nome}</p>
        );
    }
}

export default Nome;