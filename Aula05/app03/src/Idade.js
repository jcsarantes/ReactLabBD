import React from 'react';

class Idade extends React.Component {
    
    render() {
        console.log("Idade - render()");
        return (
            <p>Idade: {this.props.idade} </p>
        );
    }
}

export default Idade;