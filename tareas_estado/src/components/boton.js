import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";


const botonAgregar = () => {

    const [ocultarCaptura, setOcultarCaptura] = useState(true);

    const ocultarCap = () => {
        setOcultarCaptura(!ocultarCaptura);
    };

  return (
    <div>
        {ocultarBotonAgregar ? null : (
            <button className="botonAgregar" onClick={ocultarCap}>
            <IoIosAddCircleOutline />
            </button>
        )}
    </div>
  );
}

export default botonAgregar;