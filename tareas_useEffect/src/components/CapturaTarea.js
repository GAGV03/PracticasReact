//Una forma para capturar una nueva tarea
//Autor: Gustavo Alejandro Gutiérrez Valdes

import { useRef, useState } from "react";
import "../styles/capturaTarea.css";
import { v4 as uuidv4 } from "uuid";
import { ContextoTareas } from "./ListaTareas";
import { useContext } from "react";

const CapturaTarea = (props) => {
  const [descripcion, setDescripcion] = useState("");


  //Función para agregar una nueva tarea
  const agregarNuevaTarea = (evento) => {
    evento.preventDefault();
    const nuevaTarea = { 
      //descripcion: refDescripcion.current.value,
      descripcion: descripcion,
      id: uuidv4(),
      completada: false};

    //Ejecuta la función que se pasa como onSubmit

    if(descripcion === ""){
      alert("No puedes agregar una tarea vacía");
    }else{
      props.onSubmit(nuevaTarea);
      props.onCancel();
    }
  };

  const cambiaDescripcion = (evento) => {
    setDescripcion(evento.target.value);
    console.log(descripcion);
  }

  const handleCancelar = () => {
    props.onCancel();
  }

  return (
    <form className="tarea-forma" onSubmit={agregarNuevaTarea}>
      <label htmlFor="descripcion">Nueva tarea: </label>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe la descripción de la tarea"
        name="descripcion"
        id="descripcion"
        onChange={cambiaDescripcion}
      />
      <button className="tarea-boton" type="submit" >
        Agregar tarea
      </button>
      <button className="tarea-boton" type="button" onClick={handleCancelar}>
        Cancelar
      </button>
    </form>
  );
};

export default CapturaTarea;
