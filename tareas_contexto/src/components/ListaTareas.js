//App completa, incluye la captura y la colección de renglones
//Autor: Gustavo Alejandro Gutiérrez Valdes

import "../styles/listaTareas.css";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import { createContext, useContext, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ContextoTareas } from "./ProveedorTareas";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const contextito = createContext()

//CONTEXTO
const ListaTareas = (props) => {
  const [
    arrTareas,
    ocultarCaptura,
    mostrarCaptura,
    ocultarBotonAgregar,
    agregarNuevaTarea,
    completarTarea,
    eliminarTarea,
    cancelarCaptura,
    modoOscuro,
    toggleModoOscuro,
  ] = useContext(ContextoTareas);

  const estiloAgregar = "botonAgregar " + (modoOscuro ? "darkmode" : "lightmode")
  const estiloContenedorTarea = "tarea-contenedor " + (modoOscuro ? "darkmode" : "lightmode");

  return (
    <div className={modoOscuro ? "fondoApp-oscuro" : "fondoApp-claro"}>
      {modoOscuro ? (
        <button className="botonModoOscuro" onClick={toggleModoOscuro}>
          <LightModeIcon />
        </button>
      ) : (
        <button className="botonModoClaro" onClick={toggleModoOscuro}>
          <DarkModeIcon />
        </button>
      )}
      <div className="lista-tareas">
        {ocultarCaptura ? null : (
          <CapturaTarea 
            onSubmit={agregarNuevaTarea}
            onCancel={cancelarCaptura}
          />
        )}
        {ocultarBotonAgregar ? null : (
          <button className={estiloAgregar} onClick={mostrarCaptura}>
            <IoIosAddCircleOutline />
          </button>
        )}

        {arrTareas.length !== 0 ? (
          arrTareas.map((tarea) => {
            return (
              <Tarea
                tarea={tarea}
                key={tarea.id}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
              />
            );
          })
        ) : (
          <div className={estiloContenedorTarea}>
            <h2>No hay tareas</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListaTareas;
