//Representa un renglón con información de una tarea
//Autor: Gustavo Alejandro Gutiérrez Valdes

import { MdOutlineDeleteForever } from "react-icons/md";
import "../styles/tarea.css";

const Tarea = ({ tarea, completarTarea, eliminarTarea }) => {
  //Calcular estilo de la tarea, depende de su estado
  const estilo = "tarea-contenedor " + (tarea.completada ? "completada" : "");
  return (
    <div className={estilo}>
      <div
        className="tarea-descripcion"
        onClick={() => {completarTarea(tarea.id)}}
      >
        {tarea.descripcion}
      </div>
      <div className="tarea-icono-borrar" onClick={()=>{eliminarTarea(tarea.id)}}>
        <MdOutlineDeleteForever />
      </div>
    </div>
  );
};

export default Tarea;
