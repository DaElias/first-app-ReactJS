import React, { useState,Component } from 'react';



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
            <button className="btn" onClick={() => { Incrementar(props.incrementarDisminuir) }}>Incgrementar</button>
            <button className="btn" onClick={() => { Disminuir(props.incrementarDisminuir) }}>Disminuir</button>
        </>
    )
}


export default ContadorComponentes;
//export { ContadorComponentes };