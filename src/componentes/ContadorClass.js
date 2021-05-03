import React, { Component } from 'react';


class Contador extends Component {

    constructor(props) {
        super(props);

        this.state = { Contador: 0 }
    }

    incrementar(a) {
        this.setState((estadoAnterior) => {
            return {
                Contador: estadoAnterior.Contador + a
            }
        });
    }
    disminuir(a) {
        this.setState((estadoAnterior) => {
            return {
                Contador: estadoAnterior.Contador - a
            }
        });
    }

    render() {
        return (
            <div>
                <h3>-Contador con clases</h3>
                <h1>Contador: {this.state.Contador}</h1>
                <button className="btn" onClick={() => { this.incrementar(this.props.incrementarDisminuir) }}>Incrementar</button>
                <button className="btn" onClick={() => { this.disminuir(this.props.incrementarDisminuir) }}>Disminuir</button>
            </div>
        );
    }

}


export default Contador;