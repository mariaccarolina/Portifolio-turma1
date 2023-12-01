import React from "react";
import Pizza from "../assets/pizza.png"
import {Img} from "../Styles/projetosStyle"

function Projetos() {
    return (
        <section>
              <h1>Projetos</h1>
              <section>
                <figure>
                    <a href="https://la-pizza-amber.vercel.app/" target="_blank">
                    <Img src={Pizza} alt="Site La pizza" />
                    </a>
                </figure>
                <div>
                    <h2>La Pizza</h2>
                    <h3>REACT, STYLED COMPONENTS</h3>
                </div>
              </section>
        </section>
    )
}
export default Projetos