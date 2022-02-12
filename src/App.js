import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parite from './components/parite';
import Factoriel from './components/factoriel';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Parite />}>    </Route>

    <Route path="/fact" element={<Factoriel />}>    </Route>

    
    </Routes>
    </BrowserRouter>
    );
    
}

export default App;
