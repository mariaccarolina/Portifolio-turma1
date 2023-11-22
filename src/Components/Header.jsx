import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">Inicio</Link>
            <Link to="/sobre">Sobre</Link>
            <Link>Projetos</Link>
        </header>
    )
}
export default Header