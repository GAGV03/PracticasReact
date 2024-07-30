//App completa, incluye la captura y la colección de renglones
//Autor: Gustavo Alejandro Gutiérrez Valdes

import "../styles/listaTareas.css";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import { useContext, useState, useEffect, useCallback } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ContextoTareas } from "./ProveedorTareas";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from '@mui/icons-material/LightMode';
import {v4 as uuidv4} from "uuid";

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
    setArrTareas
  ] = useContext(ContextoTareas);

const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos");

const descargar = useCallback(() => {
    console.log("Descargando datos");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const arrNuevo = data.map((usuario) => {
          const tareaNueva = {
            id: uuidv4(),
            descripcion: usuario.title,
            completada: usuario.completed,
          };
          return tareaNueva;
        });
        setArrTareas(arrNuevo);
      })
      .catch((error) => console.log(error));
})

  useEffect(() => {
    descargar();
  }, [url]);
  
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
          <button className="botonAgregar" onClick={()=>setUrl("https://jsonplaceholder.typicode.com/todos")}>Todos los usuarios</button>
          <button className="botonAgregar" onClick={()=>setUrl("https://jsonplaceholder.typicode.com/todos?completed=true")}>Completadas</button>
          <button className="botonAgregar" onClick={()=>setUrl("https://jsonplaceholder.typicode.com/todos?completed=false")}>No Completadas</button>

        {ocultarCaptura ? null : (
          <CapturaTarea
            onSubmit={agregarNuevaTarea}
            onCancel={cancelarCaptura}
          />
        )}
        {ocultarBotonAgregar ? null : (
          <button className="botonAgregar" onClick={mostrarCaptura}>
            <IoIosAddCircleOutline />
          </button>
        )}

        {/*Genera los renglones para las tareas*/}
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
          <div className="tarea-contenedor">
            <h2>No hay tareas</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListaTareas;
