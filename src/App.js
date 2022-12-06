import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Parite from './components/parite';
import Factoriel from './components/factoriel';
import Pgcd from './components/pgcd';
function App() {
  return (
    <Router>
<ul>
  <li><Link to="/">Parité</Link></li>
  <li><Link to="/fact">Factoriel</Link></li>
  <li><Link to="/pgcd">PGCD</Link></li>
</ul>
    <Routes>
    <Route path="/" element={<Parite />}>    </Route>

    <Route path="/fact" element={<Factoriel />}>    </Route>
    <Route path="/pgcd" element={<Pgcd />}>    </Route>

    
    </Routes>
    </Router>
    );
    
}

export default App;
