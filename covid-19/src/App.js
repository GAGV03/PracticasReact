//Crea el componente principal de la aplicación
//Autor: Gustavo Alejandro Gutiérrez Valdes
import "./App.css";
import React from "react";
import Titulo from "./components/Titulo";
import Registro from "./components/Registro";
import imagen from "./images/covid.png";

function App() {
  return (
    <div className="App">
      <Titulo texto="COVID-19" subtitulo="Página de Prueba" />
      <Registro
        registro={{
          fecha: new Date(),
          descripcion: "Zona Norte",
          cantidad: "1500",
        }}
      />
      <img src={imagen} alt="Covid" />
    </div>
  );
}

export default App;

