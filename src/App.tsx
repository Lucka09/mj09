import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto/index';
import Nosotros from './pages/Nosotros/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Nosotros" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
