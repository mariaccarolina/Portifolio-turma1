import React from "react";
import Carol from "../assets/eu.jpeg"
import Linkedin from "../assets/linkedin.svg"
import Github from "../assets/github.svg"
import Instagram from "../assets/instagram.svg"
import {Img, Main,Sessao} from "../Styles/inicioStyle"

function Inicio() {
    return (
        <Main>
            <figure>
                <Img src={Carol} alt="" />
            </figure>
            <Sessao>
                <h1>Olá eu sou a Carol</h1>
                <h2>Desenvolvedora Front-End</h2>
                <div>
                    <a href="https://www.linkedin.com/in/maria-carolina-28b300213/" target="_blank">
                        <img src={Linkedin} alt="" />
                    </a>

                    <a href="">
                        <img src={Github} alt="" />
                    </a>

                    <a href="">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </Sessao>
        </Main>
    )
}
export default Inicio