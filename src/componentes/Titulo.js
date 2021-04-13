import React from 'react'; //imr

//componentes
//se le pone Usuario = 'Usuer' haciendo referencia que quede Users si esta propiedade esta vacia
const Titulo = ({ Usuarios = 'User', Edad ='?', Color='black' }) => { 
    return (<><h1 className='titulo' style={{ fontSize: 50, color: Color}}>Pagina de: {Usuarios}.com</h1>
        <hr></hr><h2>Su edad es: {Edad}</h2>
    </>
    );
};

/* 
const TituloAzul = ({ Usuarios, Edad }) => {
    return (
        <>
        <h1 className='titulo' style={{ fontSize: 55, color: 'blue' }}>Pagina de: {Usuarios}.com</h1>
        <hr></hr><h2>Su edad es: {Edad}</h2>
        </>
        );
    };
    */

//export { TituloRed, TituloAzul }; //asi podemos importar mas componentes
export { Titulo };