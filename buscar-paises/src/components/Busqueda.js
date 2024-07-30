//Autor: Gustavo Alejandro Gutiérrez Valdes A01747869. Ingeniería en Tecnologías Computacionales

import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import '../styles/busqueda.css';

export const Busqueda = () => {

    const [pais,setPais] = useState("");

    const handlePais = (e) => {
        setPais(e.target.value);
    }

    return (
        <div>
            <div className="busqueda">
                <div className="titulo">
                    <h1>Búsqueda de países</h1>
                </div>
                <div className="cuadro_buscar">
                    <input type="text" placeholder="Enter the country" value={pais} onChange={handlePais}/>
                    <button type="submit"> <Link to={`/${pais}`}>Search</Link></button>
                </div>
            </div>
            <Outlet />
        </div>
    );
}