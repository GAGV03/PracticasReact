import "./App.css";
import Header from "./components/header";
import Renglon from "./components/renglon";
import "../src/images/planetaV.png";
import "../src/images/AmvsAt.png";
import "../src/images/IA.png";
import "../src/images/react.png";
import "../src/images/smite.png";
import "../src/images/XboxvsPlay.png";

function App() {
  return (
    <div className="App">
      <div className="encabezado">
        <Header 
          titulo="YOUTUBE"
          subtitulo="Videos, Music, and More"/>
      </div>
      <div className="container">
        <Renglon
          titulo="Planeta Vegetta Ep. 101"
          descripcion="En este episodio construiremos nuestra guarida para poder enfrentar al dragón de ender"
          duracion="30:10"
          imagen={require("./images/planetaV.png")}
          imagenAlt="PlanetaVegetta"
        />
        <Renglon
          titulo="America vs Atlas Resumen"
          descripcion="Resumen del partido de America vs Atlas de la jornada 12 de la Liga MX"
          duracion="9:45"
          imagen={require("./images/AmvsAt.png")}
          imagenAlt="AmericaVsAtlas"
        />
        <Renglon
          titulo="¿Porqué nos encontramos en la época de la IA?"
          descripcion="Durante los últimos años se ha notado un avance significativo de la Inteligencia Artificial pero ¿Realmente en tan avanzada como dicen?"
          duracion="20:00"
          imagen={require("./images/IA.png")}
          imagenAlt="InteligenciaArtificial"
        />
        <Renglon
          titulo="Curso REACT 2024 Ep.1"
          descripcion="Debido a sus comentarios, he decidido el comenzar un curso de REACT vigente para este año 2024."
          duracion="1:35:02"
          imagen={require("./images/react.png")}
          imagenAlt="React2024"
        />
        <Renglon
          titulo="Smite Master Conquest Ep.203 Thor Jungla"
          descripcion="Hoy les traigo una partida con Thor jugando en la jungla, espero les guste."
          duracion="31:27"
          imagen={require("./images/smite.png")}
          imagenAlt="React2024"
        />
        <Renglon
          titulo="Xbox vs Playstation: ¿Cuál es mejor?"
          descripcion="La guía definitiva para saber cuál consola es mejor, Xbox o Playstation."
          duracion="15:40"
          imagen={require("./images/XboxvsPlay.png")}
          imagenAlt="React2024"
        />
      </div>
    </div>
  );
}

export default App;
