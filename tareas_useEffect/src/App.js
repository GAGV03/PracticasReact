//Autor: Gustavo Alejandro Gutiérrez Valdes

import { GrTask } from "react-icons/gr";
import "./App.css";
import { FcAlarmClock } from "react-icons/fc";
import ListaTareas from "./components/ListaTareas.js";
import "./styles/listaTareas.css";
import ProveedorTareas from "./components/ProveedorTareas.js";
import "./index.js";
import { useEffect } from "react";
import Timer from "./components/Timer.js";

function App() {
  return (
    <div>
      <ProveedorTareas>
        <ListaTareas />
      </ProveedorTareas>
    </div>
  );
}

export default App;
