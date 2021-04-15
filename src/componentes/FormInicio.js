import { React, useState } from 'react';


const FormInicioSecion = () => {
    const [usuario, CambiaUsuario] = useState('');
    const [password, CambiarPass] = useState('');
    return (
        <>
            <form action='#'>
                <p>Desde aqui puede Iniciar Sesion!!</p>
                <p>Usuario: {usuario}</p>
                <p>Contraseña: {password}</p>

                <div>
                    <label htmlFor="usuario">Usuario: </label>
                    <input
                        type="text"
                        name="usuario"
                        id='usuario'
                        value={usuario}
                        onChange={(e) => {
                            //console.log(e.target.value);
                            CambiaUsuario(e.target.value);
                        }}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Contraseña: </label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={(e) => {
                            CambiarPass(e.target.value)
                        }}

                    ></input>
                </div>
                <br></br>
                <button className='btn' type='submit'>Iniciar Sesion</button>
            </form>
        </>
    );
};


export { FormInicioSecion };