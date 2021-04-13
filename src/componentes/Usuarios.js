import React from 'react'

const Usuarios = () => {
    const name = 'David';
    const pais = 'Colombia';

    return (
        <div>
            <h1>Bienvenido {name}</h1>
            <p>Tu pais es: {pais}</p>
            <p>Saludos a todos!!</p>
        </div>)
};
/* 
const ListaDeAmigos = () => {
    const amigos = ['Juan', 'Maria', 'Pilar', 'Pedro', 'Juan', 'Maria', 'Pilar', 'Pedro', 'Juan', 'Maria', 'Pilar', 'Pedro']
    return (
        <>
        <p>Tus amigos son: {amigos.length}</p>
        <ul>{amigos.map((amigos, index) => { return (<li key={index}> {amigos}</li>) })}</ul>
        </>
        );
    };
*/
export default Usuarios; //para exportar por defecto la componente Usuarios