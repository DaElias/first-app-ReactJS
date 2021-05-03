import { React, useState } from 'react';


const FormInicioSecion = (props) => {
    const [usuario, CambiaUsuario] = useState('');
    const [password, CambiarPass] = useState('');
    /* 
    const onChangeUsuario = (evento) => {
        CambiaUsuario(evento.target.value);
    };
    

    */
    const onechange = (e) => {
        if (e.target.name == "usuario") {
            CambiaUsuario(e.target.value);
        } else if (e.target.name == "password") {
            CambiarPass(e.target.value);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (usuario == "david" && password == "123") {
            // alert('Datos correctos');
            props.cambiarEstado(true);
        } else {
            alert('Datos errados');
            CambiaUsuario('');
            CambiarPass('');
        }
    }
    return (
        <>
            <form action='#' onSubmit={onSubmit}>
                <p>Desde aqui puede Iniciar Sesion!!</p>
                <div className="row">
                    <div className="col-2" style={{ textAlign: "right" }}>
                        <p>Usuario:</p>
                    </div>
                    <div className="col-4" style={{ textAlign: "left" }}>
                        {usuario}
                    </div>
                </div>
                <div className="row">
                    <div className="col-2" style={{ textAlign: 'right' }}>
                        <p>Contraseña: </p>
                    </div><div className="col-2" style={{ textAlign: 'left' }}>
                        {password}
                    </div>
                </div>

                <div className="row">
                    <div className="col-3" style={{ textAlign: 'right' }}>
                        <label htmlFor="usuario">Usuario: </label>
                    </div>
                    <div className="col-4">
                        <input
                            type="text"
                            name="usuario"
                            id='usuario'
                            value={usuario}
                            onChange={onechange /* onChangeUsuario */}
                        ></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3" style={{ textAlign: "right" }}>
                        <label htmlFor="password">Contraseña: </label>
                    </div>
                    <div className="col-4">
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={password}
                            onChange={onechange}
                        ></input>
                    </div>
                </div>
                <br></br>
                <button className='btn' type='submit' >Iniciar Sesion</button>
            </form>
        </>
    );
};


export { FormInicioSecion };