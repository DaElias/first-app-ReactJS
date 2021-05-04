import React, { useState, useEffect } from 'react';
import Boton from './elementos/Boton';

const ContadorComponentes = (props) => {
    const [contador, incrementarDisminuir] = useState(0);
    
    /* 
    //se ejecuta inicia el componente
    useEffect(() => {
        console.log("Solo se ejecuta al inicio..");
    },[]);
    //se ejecuta al inicio y cuando hay un cambio en el estado del componente
    useEffect(()=>{
        console.log("Se ejeccuta en cada cambio..");
    });
    
    
    //solo se ejecuta cuando cambia el estado del contador..
    useEffect(()=>{
        console.log("cambio el contador",contador)
    },[contador]);
    */
    useEffect(()=>{
        //codigo del efecto
        return(()=>{
            console.log("adios componente");
        });
    },[]);


    
    //contador
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