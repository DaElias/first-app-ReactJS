import styled, { css } from 'styled-components';


const Boton = styled.button`
    background: #000;
    color: #fff;
    display: inline-block;
    padding: 20px;
    border: none;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 3px;
    margin-right: 10px;
    width:${props => props.LARGO ? '100%' : 'auto'};
    &:hover{
    background: #44a559;
    color: #fff;
}


//con styled-component podemos poderle propiedades a los componentes de estilos de css
${props => props.NEGRO && css`
background-color:grey;
color:white;
margin:10px;
&:hover{
    background-color:red;
}
`}

${props => props.marginTop && css` margin:50px 10px ;`}

`;



export default Boton;