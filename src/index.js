import React from 'react';
import ReactDOM from 'react-dom';

/*
ReactDOM.render(
  <React.StrictMode>
  <h1>Hola Mundo</h1>
  </React.StrictMode>,
  document.getElementById('root')
  );
  */
const name = 'David';
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
); //Si esta contenido
// si queremos trabajor con clases para editar en el css tiene que se con "ClaseName", de lo contrario js va a creer que es una clase de js


const sesion = false;
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


const JSX3 = (
  <div style={{ textAlign: 'center' }}>
    {sesion === true ?
      <>
        <p style={{ color: 'Blue' }}>Has Iniciado Sesion...</p>
        <h1 style={{ fontSize: 100 }}>Hola {name}</h1>
        <p>Bienvenido a Jumbo</p>
      </>
      : <p style={{ color: 'red' }}>No has Iniciado Sesion...</p>}
  </div>
);

ReactDOM.render(JSX3, document.getElementById('root'));


