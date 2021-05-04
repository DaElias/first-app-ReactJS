import React from 'react'
import styled from 'styled-components';
// para instalar el styled-components es asi --> npm install --save styled-components
//import styles from 'styled-components';

const Usuarios = ({ Usuarios = 'Anonimo', pais, amigos = ['Juan', 'Pedro', 'Lucas', 'Criss', 'Juan', 'Pedro', 'Lucas', 'Criss', 'Luis'] }) => {
    //const amigos = ['Juan', 'Pedro', 'Lucas', 'Criss', 'Juan', 'Pedro', 'Lucas', 'Criss', 'Luis']
    return (
        <div >
            <Titulo> Holas  {Usuarios} </Titulo>
            <p>Tu pais es: {pais}</p>
            <p>Saludos a todos!!</p>
            <p>Tengo {amigos.length} amigos</p>
            <ul>
                {amigos.map((amigos, i) => { return (<li key={i}>{amigos}</li>) })}
            </ul>
        </div>)
};


const Titulo = styled.h1`
    margin: 10px 100px;
    color:red;
    text-shadow:10px 10px 10px  black;
`;


export default Usuarios; //para exportar por defecto la componente Usuarios




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