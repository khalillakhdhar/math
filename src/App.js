import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parite from './components/parite';
import Factoriel from './components/factoriel';
import Pgcd from './components/pgcd';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Parite />}>    </Route>

    <Route path="/fact" element={<Factoriel />}>    </Route>
    <Route path="/pgcd" element={<Pgcd />}>    </Route>

    
    </Routes>
    </Router>
    );
    
}

export default App;
