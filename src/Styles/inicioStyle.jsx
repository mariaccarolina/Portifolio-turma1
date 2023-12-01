import styled from "styled-components"

export const Img = styled.img`
    width: 40vw;
    border-radius: 20px;

    @media (max-width: 800px) {
        width: 80vw;
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88vh;

    @media (max-width:800px) {
        flex-direction: column;
        /* height: 78vh; */
    }
`
export const Sessao = styled.section`
    margin-left: 20px;
    text-align: center;
`