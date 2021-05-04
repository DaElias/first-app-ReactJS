//import React from 'react';
import React, { useState } from 'react'; //agregamos el hooks de stados
import ReactDOM from 'react-dom';
import Usuarios from './componentes/Usuarios'; // para importar el componente usuarios
import { Titulo, Error } from './componentes/Titulo'; //asi podemos importar mas de una componente
import { FormInicioSecion } from './componentes/FormInicio';
//import ContadorClass from './componentes/ContadorClass';
import ContadorComponentes from './componentes/ContadorComponentes';
//import './componentes/index.css'; //importar css
import styles from './componentes/index.module.css';
import Boton from '../src/componentes/elementos/Boton';
import EjemploUseReducer from './componentes/EjemploUseReducer';


const App2 = () => {
  const [sesion, cambiarEstado] = useState(false); //hooks para cambiar el estado de una componente


  return (
    <div className={styles.container} >
      {sesion === true ?
        <>
          <Titulo Usuarios='David.com' Edad='21' Color='Red' />
          <Usuarios Usuarios='David' pais='Colombia' />
          <EjemploUseReducer></EjemploUseReducer>
          <Boton NEGRO LARGO onClick={() => cambiarEstado(false)}> Cerrar Seccion</Boton>
          {/* 
          <ContadorClass incrementarDisminuir={1} />
          */}
          <hr></hr>
          <ContadorComponentes incrementarDisminuir={1} />
          {/* 
          */}

        </>
        :
        <>
          <Error error='No has iniciado secion' />
          <FormInicioSecion cambiarEstado={cambiarEstado} />
          {/* 
          <button  className='btn' onClick={() => cambiarEstado(true)}>Iniciar Seccion</button>
          */}
        </>
      }
    </div>
  );
};

ReactDOM.render(<App2 />, document.getElementById('root'));








//import {TituloRed,TituloAzul} from './componentes/Titulo'; //asi podemos importar mas de una componente

//Componente principal

//  <TituloRed Usuarios='Manuel'/>   cunado haces Usuarios='name', Edad='12' estas creando un objeto props donde props.Usuarios es igual a 'name'
// hay varias formas de usar los props la otra forma es poninedo las propiedades y accediendo a ellas de la siguente forma, {Usuarios}
/*
const App = () => {
  let sesion11 = true;
  const cerrarSesion = () => {
    alert("Estas seguro");
  }
  return (
    <>
    {sesion11 === true ?
      <>
      <Titulo Usuarios="David" Edad='12' Color="red" />
      <Titulo Usuarios="Maria" Edad='21' Color="blue" />
      <Titulo />

          <Usuarios Usuarios="David" Pais='Colombia' />
          <Usuarios amigos={[12, 3, 4, 1]} />
          <button onClick={cerrarSesion}>Cerrar Seccion</button>
          </>
          :
          <h1>Error de sesion</h1>
        }
        </>
        );
      };
      */
      //ReactDOM.render(<App />, document.getElementById('root'));




/**
/*
ReactDOM.render(
  <React.StrictMode>
  <h1>Hola Mundo</h1>
  </React.StrictMode>,
  document.getElementById('root')
  );
  const name = 'David';
  const sesion = true;
  const pais = 'Colombia';
  */
//const pais = undefined;

/*
const JSX = <h1>Hola {name}!!</h1>;
const JSX1 = (
  <>
  <h1 className="titulo" style={{ color: 'red' }} >Hola {name}</h1>
  <p>Que tenga buen dia señor {name}</p>
  </>
); //No esta contenido
let JSX2 = (
  <div>
  <h1  >Hola {name}</h1>
  <p>Que tenga buen dia señor {name}</p>
  </div>
  */
 //Si esta contenido
// si queremos trabajor con clases para editar en el css tiene que se con "ClaseName", de lo contrario js va a creer que es una clase de js


/*
const validS = (
  <>
    <h1>Bienvenido al programa</h1>
    <p>Ya esta listo todo...</p>
  </>
);
const invalidS = (
  <>
    <h1>ERROR</h1>
    <p>No es posible iniciar secion...</p>
  </>
);
const verificar = (sesion) => {
  if (sesion == true) {
    return validS;
  } else {
    return invalidS;
  }
} //funcion de tipo flecha, retorna codigo jsx
ReactDOM.render(verificar(sesion), document.getElementById('root'));
*/

/*
const JSX3 = (
  <div style={{ textAlign: 'center' }}>
  {sesion === true ?
    <>
    <p style={{ color: 'Blue' }}>Has Iniciado Sesion...</p>
    <h1 style={{ fontSize: 100 }}>Hola {name}</h1>
    {pais && <p>Tu pais es {pais}</p>}
    </>
      : <p style={{ color: 'red' }}>No has Iniciado Sesion...</p>}
      </div>
      );

      */
//ReactDOM.render(JSX3, document.getElementById('root'));





//conponente

/*
const Usuarios = () => {
  return (
    <div>
    <h1>Bienvenido {name}</h1>
    <p>Tu pais es: {pais}</p>

    </div>)
  };
  */
/*
const Usuarios = () => {
  return (
      <>
    { sesion === true ?
        <>
        <h1>Bienvenido {name}</h1>
        <p>Tu pais es: {pais}</p>
        <p>Tus amigos son: {amigos.length}</p>
        <ul>{amigos.map((amigos,index)=>{return(<li key={index}>{amigos}</li>)})}</ul>
        </>
        :
        <h1>Debes iniciar Sesion</h1>
      }
      </>
      );
    };
    */



