import React, { Component } from 'react';


class Contador extends Component {

    constructor(props) {
        super(props);

        this.state = { Contador: 0 }
    }


    //metodos de ciclo de vida
    componentDidMount() {
        console.log('se inicio');
        //se ejecuta conado se inicia el componente o la clase
    }

    componentDidUpdate(propiedadesAnteriores, estadoAnterior) {
        console.log('el compoenete se actualizo')
        //se ejecuta cuando se cambia un stado, dentro de la clase o componente
        console.log('Propiedades anteriores', propiedadesAnteriores);
        console.log('estado anterior',estadoAnterior);
    }

    componentWillUnmount(){
        console.log('Adios componentes');
        //se ejecuta cuando cerramos el componente
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