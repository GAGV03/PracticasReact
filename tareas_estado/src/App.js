//Autor: Gustavo Alejandro Gutiérrez Valdes

import { GrTask } from 'react-icons/gr';
import './App.css';
import { FcAlarmClock } from 'react-icons/fc';
import ListaTareas from './components/ListaTareas.js';
import'./styles/listaTareas.css';


function App() {
  return (
    <div className="App">
      <ListaTareas />
    </div>
  );
}

export default App;
