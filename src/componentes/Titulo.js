import React from 'react'; //imr
//componentes
//se le pone Usuario = 'Usuer' haciendo referencia que quede Users si esta propiedade esta vacia
const Titulo = ({ Usuarios = 'User', Edad = '?', Color = 'black' }) => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ fontSize: 50 }}>{Usuarios}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Su eded es: {Edad}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
};


const Error = ({ error }) => {
    return (
        <>
            <Titulo />
            <div className="alert alert-danger" role="alert">{error}</div>
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
export { Titulo, Error };