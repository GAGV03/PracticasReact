//Representa un renglón con información de una tarea
//Autor: Gustavo Alejandro Gutiérrez Valdes

import { MdOutlineDeleteForever } from "react-icons/md";
import "../styles/tarea.css";
import { useContext } from "react";
import { ContextoTareas } from "./ProveedorTareas";

const Tarea = ({ tarea, completarTarea, eliminarTarea }) => {

  const [,,,,,,,,modoOscuro,] = useContext(ContextoTareas);

  const estilo = "tarea-contenedor " + (modoOscuro ? "darkmode" : "lightmode");
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
