import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from "./pages/Additem"
import Homeitem from './pages/Homeitem';
import BarcodeScanner from './pages/BarcodeScanner';
import Modaltest from './components/Modaltest';
import axios from "axios";


// async function App() {

//   await axios.post('http://167.71.195.231:2095/auth/login', {}, {
//     auth: {
//       username: 'hello',
//       password: 'psswd'
//     }
//   }).then(function(response) {
//     console.log('Authenticated');
//   }).catch(function(error) {
//     console.log('Error on Authentication');
//   });
  return (
    <BrowserRouter>
      
      <Routes>
          <Route path="/Additem" element={<Additem />} />
          <Route path="/Homeitem" element={<Homeitem />} />
          <Route path='/BarcodeScanner' element={<BarcodeScanner />} />
          <Route path='*' element={<Homeitem />} />
          <Route path='/Modaltest' element={<Modaltest />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
