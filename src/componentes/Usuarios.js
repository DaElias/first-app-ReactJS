import React from 'react'

const Usuarios = ({ Usuarios, pais, amigos = ['Juan', 'Pedro', 'Lucas', 'Criss', 'Juan', 'Pedro', 'Lucas', 'Criss', 'Luis'] }) => {
    //const amigos = ['Juan', 'Pedro', 'Lucas', 'Criss', 'Juan', 'Pedro', 'Lucas', 'Criss', 'Luis']
    return (
        <div>
            <h1>Bienvenido {Usuarios}</h1>
            <p>Tu pais es: {pais}</p>
            <p>Saludos a todos!!</p>
            <p>Tengo {amigos.length} amigos</p>
            <ul>
                {amigos.map((amigos, index) => { return (<li key={index}>{amigos}</li>) })}
            </ul>
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