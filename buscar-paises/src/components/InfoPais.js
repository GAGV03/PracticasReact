//Autor: Gustavo Alejandro Gutiérrez Valdes A01747869. Ingeniería en Tecnologías Computacionales

import { Link, useNavigate, useParams} from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import '../styles/infoPais.css';

export const InfoPais = () => {

    const {nombrePais} = useParams();

    const [pais, setPais] = useState(nombrePais);
    const [url,setUrl] = useState(`https://restcountries.com/v3.1/name/${pais}?fields=flags`);
    const [banderas, setBanderas] = useState([]);

    const descargar = useCallback(() => {
        console.log("Descargando datos");
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const banderas = data.map((pais) => {
              const banderasPais = {
                png: pais.flags.png,
                svg: pais.flags.svg,
                alt: pais.flags.alt,
              };
              return banderasPais;
            });
            setBanderas(banderas);
          })
          .catch((error) => console.log(error));
    })
    
      useEffect(() => {
        descargar();
      }, [url]);


    return (
        <div className="datosPais">
            <h1>Pais: {pais}</h1>
            <img className="imagenPais" src={banderas.length > 0 ? banderas[0].png : ''} alt="pais" />
            <button> <Link to="/">Regresar a Inicio</Link></button>
        </div>
    );
}