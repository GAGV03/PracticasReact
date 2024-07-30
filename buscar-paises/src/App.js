//Autor: Gustavo Alejandro Gutiérrez Valdes A01747869. Ingeniería en Tecnologías Computacionales

import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Busqueda } from './components/Busqueda';
import { InfoPais } from './components/InfoPais';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Busqueda />} />
        <Route path="/:nombrePais" element={<InfoPais />} />
      </Routes>
    </div>
  );
}

export default App;
