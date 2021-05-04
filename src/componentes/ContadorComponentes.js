import React, { useState, Component } from 'react';
import Boton from './elementos/Boton';

const ContadorComponentes = (props) => {
    const [contador, incrementarDisminuir] = useState(0);

    const Incrementar = (n) => {
        incrementarDisminuir(contador + n);
    }
    const Disminuir = (n) => {
        incrementarDisminuir(contador - n);
    }



    return (
        <>
            <h3>-Contador por componentes</h3>
            <h1>Contador: {contador}</h1>
            <Boton marginTop onClick={() => { Incrementar(props.incrementarDisminuir) }}>Incrementar</Boton>
            <Boton onClick={() => { Disminuir(props.incrementarDisminuir) }}>Disminuir</Boton>
        </>
    )
}


export default ContadorComponentes;
//export { ContadorComponentes };