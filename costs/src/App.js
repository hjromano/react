import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/Newproject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/newproject">Novo projeto</Link>
      </div>

      <Routes>
        {/* Usando Container como rota pai */}
        <Route element={<Container customClass="min_height" />}>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/newproject" element={<Newproject />} />
        </Route>
      </Routes>

      <p>Footer</p>
    </Router>
  );
}

export default App;
