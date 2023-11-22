import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import Inicio from "./Components/Inicio";
import Sobre from "./Components/Sobre";
import Projetos from "./Components/Projetos";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App