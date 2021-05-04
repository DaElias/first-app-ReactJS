import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



const Blog = () => {
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


    return (
        <ContenedorBlog>
            <Titulo>Blog</Titulo>
            {cargando === true ?
                <p>Cargando...</p>
                :
                <div>
                    {articulos.map((articulos) => {
                        return <Articulo key={articulos.id}>{articulos.titulo}</Articulo>
                    })}

                </div>
            }
        </ContenedorBlog>
    )
}

const ContenedorBlog = styled.div`
    margin: 40px 0 20px 0;
`;

const Titulo = styled.h2`   
    margin-bottom:10px;
`;

const Articulo = styled.p`
    padding: 10px;
    border-bottom:10px;
    margin-bottom: 1px solid #ccc;
`;


//export {Blog};
export default Blog;