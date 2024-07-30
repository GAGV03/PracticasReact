//Proveedor de arrTareas y sus operaciones
//Autor: Gustavo Alejandro Gutiérrez Valdes

import { createContext, useState } from "react";

export const ContextoTareas = createContext(); 

const ProveedorTareas = ({children}) => {

    //DATOS
    const [arrTareas, setArrTareas] = useState([]);
    const [ocultarCaptura, setOcultarCaptura] = useState(true);
    const [ocultarBotonAgregar, setOcultarBotonAgregar] = useState(false);
    const [modoOscuro, setModoOscuro] = useState(false);

    const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
    }

    //OPERACIONES
    const agregarNuevaTarea = (tareaNueva) => {
        setArrTareas([tareaNueva, ...arrTareas]);
    }

    const completarTarea = (id) => {
        const arrTareasNuevo = arrTareas.map((tarea) => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setArrTareas(arrTareasNuevo);
    }

    const eliminarTarea = (id) => {
        const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id);
        setArrTareas(arrTareasNuevo);
    }

    const cancelarCaptura = () => {
        setOcultarCaptura(true);
        setOcultarBotonAgregar(false);
    }

    const mostrarCaptura = () => {
        setOcultarCaptura(false);
        setOcultarBotonAgregar(true);
    }
    

    return (
        <ContextoTareas.Provider value={[arrTareas, ocultarCaptura, mostrarCaptura, ocultarBotonAgregar, agregarNuevaTarea, completarTarea, eliminarTarea, cancelarCaptura,modoOscuro,toggleModoOscuro]}>
            {children}
        </ContextoTareas.Provider>
    );
}

export default ProveedorTareas;