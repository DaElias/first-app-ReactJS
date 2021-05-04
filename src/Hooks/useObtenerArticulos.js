import { useState, useEffect } from 'react';


//esto es un hooks
const useObtenerArticulos = () => {
    // simulacion de conexion con api o base de datos..
    const [articulos, establecerA] = useState([]);
    const [cargando, establecerCargando] = useState(true);

    //se ejecuta solo un vez
    useEffect(() => {
        //este setTimeout se ejecuta a los n segundos
        setTimeout(() => {
            establecerA([
                {
                    id: 1,
                    titulo: 'Titulo del Articulo :D 1'
                },
                {
                    id: 2,
                    titulo: 'Titulo del Articulo :D 2'
                },
                {
                    id: 3,
                    titulo: 'Titulo del Articulo :D 3'
                },
                {
                    id: 4,
                    titulo: 'Titulo del Articulo :D 4'
                },
                {
                    id: 5,
                    titulo: 'Titulo del Articulo :D 5'
                }
            ]);
            establecerCargando(false);
        }, 3000);
    }, []);
    return[articulos,cargando];
}

export default useObtenerArticulos;