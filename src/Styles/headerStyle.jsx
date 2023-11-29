import styled from "styled-components"

export const StyleHeader = styled.header`
    background-color: pink;
    display: flex;
    justify-content: center;
    height: 12vh;
    align-items: center;
`

export const Navegacao = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 40vw;

        @media (max-width: 800px){
            width: 80vw;
        }
    
            a{
                text-decoration: none;
                color: white;
            }
`

