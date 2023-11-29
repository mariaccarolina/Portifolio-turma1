import React from "react";
import Carol from "../assets/eu.jpeg"
import {Img, Main} from "../Styles/inicioStyle"

function Inicio() {
    return (
        <Main>
            <figure>
                <Img src={Carol} alt="" />
            </figure>
            <section>
                <h1>Olá eu sou a Carol</h1>
            </section>
        </Main>
    )
}
export default Inicio