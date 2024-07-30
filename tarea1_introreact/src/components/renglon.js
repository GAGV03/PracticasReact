import "../styles/renglon.css";

const Renglon = ({ titulo, descripcion, duracion, imagen, altImagen }) => {
  return (
    <div className="renglon">
      <div className="imagen">
        <img src={imagen} alt={altImagen} />
        <div className="duracion">{duracion}</div>
      </div>
      <div className="tituloVideo">
        <h1>{titulo}</h1>
      </div>
      <div className="descripcion">
        <h3>{descripcion}</h3>
      </div>
    </div>
  );
};

export default Renglon;
