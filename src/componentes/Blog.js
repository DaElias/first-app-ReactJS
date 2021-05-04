import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useObtenerArticulos from '../Hooks/useObtenerArticulos';


const Blog = () => {

    const [articulos, cargando] = useObtenerArticulos();

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