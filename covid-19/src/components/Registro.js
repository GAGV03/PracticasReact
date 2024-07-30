//Muestra un renglón de detalle con fecha, descripción y cantidad
//Autor: Gustavo Alejandro Gutiérrez Valdes

import Fecha from "./Fecha";
import "./registro.css";

const Registro = ({registro}) => {
  return (
    <div className="registro">
      <Fecha fecha={registro.fecha} />
      <div className="registro-descripcion">
        <h2>{registro.descripcion}</h2>
      </div>
      <div className="registro-cantidad">{registro.cantidad}</div>
    </div>
  );
};

export default Registro;
