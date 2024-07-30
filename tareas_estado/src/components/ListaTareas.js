//App completa, incluye la captura y la colección de renglones
//Autor: Gustavo Alejandro Gutiérrez Valdes

import "../styles/listaTareas.css";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const ListaTareas = (props) => {
  //Estado para almacenar las tareas capturadas
  const [arrTareas, setArrTareas] = useState([]);
  const [ocultarCaptura, setOcultarCaptura] = useState(true);
  const [ocultarBotonAgregar, setOcultarBotonAgregar] = useState(false);

  //Función para agregar una tarea a la lista
  //...arrTareas: copia el contenido del arreglo
  const agregarNuevaTarea = (tareaNueva) => {
    setArrTareas([tareaNueva, ...arrTareas]);
    setOcultarCaptura(true)
    setOcultarBotonAgregar(false);
  };

  //Función para completar una tarea
  const completarTarea = (id) => {
    const arrTareasNuevo = arrTareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setArrTareas(arrTareasNuevo);
  };

  //Funcion para eliminar tareas
  const eliminarTarea = (id) => {
    const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id);
    setArrTareas(arrTareasNuevo);
  };

  const ocultarCapturaFunc = () => {
    setOcultarCaptura(false);
    setOcultarBotonAgregar(true);
  }

  const cancelarCaptura = () => {
    setOcultarCaptura(true);
    setOcultarBotonAgregar(false);
  }

  return (
    <div className="lista-tareas">
      {ocultarCaptura ? null : <CapturaTarea onSubmit={agregarNuevaTarea} onCancel={cancelarCaptura}/>}
      {ocultarBotonAgregar ? null : (
        <button className="botonAgregar" onClick={ocultarCapturaFunc}>
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
  );
};

export default ListaTareas;
