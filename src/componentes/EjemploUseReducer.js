import React, { useReducer } from 'react';
import Boton from './elementos/Boton';
//accion
// {tipo: 'INCREMENTAR'}


//estado inicial
const contadorInicial = { contador: 0 };

//reducer
const reducer = (estado, dispatch) => {
    switch (dispatch.tipo) {
        case 'INCREMENTAR':
            return { contador: estado.contador + 1 }
        case 'DISMINUIR':
            return { contador: estado.contador - 1 }
        case 'REINICIAR':
            return { contador: 0 }
    }
}

const EjemploUseReducer = () => {
    // useReducer
    const [estado, dispatch] = useReducer(reducer, contadorInicial);

    return (
        <>
            <h3>-Contador con el useReducer <br></br> <code> const [state, dispatch] = useReducer(reducer, initialState)</code></h3>
            <h1>Contador: {estado.contador}</h1>
            <Boton marginTop 
                onClick={() => dispatch({ tipo: 'INCREMENTAR' })}
            >Incrementar</Boton>
            <Boton marginTop 
                onClick={() => dispatch({ tipo: 'DISMINUIR' })}
            >Disminuir</Boton> <Boton marginTop 
                onClick={() => dispatch({ tipo: 'REINICIAR' })}
            >Reiniciar</Boton>
        </>
    );
}

export default EjemploUseReducer;