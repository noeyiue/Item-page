import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from "./pages/Additem"
import Homeitem from './pages/Homeitem';
import BarcodeScanner from './pages/BarcodeScanner';
import Modaltest from './components/Modaltest';
import Login from './pages/Login';


function App() {

  return (
    <BrowserRouter>
      
      <Routes>
          <Route path="/Additem" element={<Additem />} />
          <Route path="/Homeitem" element={<Homeitem />} />
          <Route path='/BarcodeScanner' element={<BarcodeScanner />} />
          <Route path='*' element={<Homeitem />} />
          <Route path='/Modaltest' element={<Modaltest />} />
          <Route path='/Login' element={<Login />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
