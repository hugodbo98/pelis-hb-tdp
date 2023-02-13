import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from "./secciones/Inicio"
import Pelicula from './secciones/Pelicula';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route path="/peliculas" element={<Pelicula />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
