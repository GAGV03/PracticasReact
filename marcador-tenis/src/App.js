//Autor: Gustavo Alejandro Gutiérrez Valdes

import './App.css';
import Boton from './components/Boton';
import Puntos from './components/Puntos';
import Titulo from './components/Titulo';
import { useState } from 'react';

function App() {

  const [puntosA, setPuntosA] = useState(0);
  const [juegosA, setJuegosA] = useState(0);
  const [setA, setSetA] = useState(0);

  const [puntosB, setPuntosB] = useState(0);
  const [juegosB, setJuegosB] = useState(0);
  const [setB, setSetB] = useState(0);

  const ganaPuntoA = () => {
    if(puntosA < 30){
      setPuntosA(puntosA + 15); //Asíncrono
    } else if(puntosA === 30){
      setPuntosA(puntosA + 10);
    } else if(puntosA == 40 && puntosB == 40){
      setPuntosA("AD")
      setPuntosB("NA")
    } else if(puntosB === "AD" && puntosA === "NA"){
      setPuntosB(40)
      setPuntosA(40)
    } else{
      if(juegosA < 5){
        setJuegosA(juegosA + 1);
        setPuntosA(0)
        setPuntosB(0)
      } else if(juegosA === 5){
        setPuntosA(0)
        setJuegosA(0)
        if(setA < 2){
          setSetA(setA + 1)
        } else if((setA + 1) === 3){
          setSetA("GAN")
          setJuegosA("AS")
          setPuntosA("TE")
          alert("Jugador A ha ganado el juego")
        }
      }
    }
  }

  const ganaPuntoB = () => {
    if(puntosB < 30){
      setPuntosB(puntosB + 15) //Asíncrono
    } else if(puntosB === 30){
      setPuntosB(puntosB + 10)
    } else if(puntosA===40 && puntosB===40){
      setPuntosB("AD")
      setPuntosA("NA")
    }else if(puntosA === "AD" && puntosB === "NA"){
      setPuntosA(40)
      setPuntosB(40)
    }else{
      if(juegosB < 5){
        setJuegosB(juegosB + 1)
        setPuntosB(0)
        setPuntosA(0)
      } else if(juegosB === 5){
        setPuntosB(0)
        setJuegosB(0)
        if(setB < 2){
          setSetB(setB + 1)
        } else if((setB + 1) === 3){
          setSetB("GAN")
          setJuegosB("AS")
          setPuntosB("TE")
          alert("Jugador B ha ganado el juego")
        }
      }
    }
  }
  return (
    <div className="App">
      <div className='encabezados'>
        <Titulo texto="Marcador Tenis" />
        <Titulo texto="Juegos" />
        <Titulo texto="Sets" />
        <Titulo texto="Puntos" />
      </div>
      <div className="contA">
        <Titulo texto="Jugador A" />
        <Puntos puntos={setA} />
        <Puntos puntos={juegosA} />
        <Puntos puntos={puntosA} />
      </div>
      <div className='contB'>
        <Titulo texto="Jugador B" />
        <Puntos puntos={setB} />
        <Puntos puntos={juegosB} />
        <Puntos puntos={puntosB} />  
      </div>
      <div className='botones'>
        <Boton texto="Gana punto A" onClick={ganaPuntoA}/>
        <Boton texto="Gana punto B" onClick={ganaPuntoB}/>
        <Boton texto="Reiniciar" onClick={() => { setPuntosA(0); setPuntosB(0); setJuegosA(0); setJuegosB(0); setSetA(0); setSetB(0);}}/>
      </div>
    </div>
  );
}

export default App;
