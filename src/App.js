import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from "./pages/Additem"
import Homeitem from './pages/Homeitem';
import BarcodeScanner from './pages/BarcodeScanner';
import Modaltest from './components/Modaltest';


function App() {

  // var session_url = 'http://api_address/api/session_endpoint';
  // var username = 'user';
  // var password = 'password';
  // var credentials = btoa(username + ':' + password);
  // var basicAuth = 'Basic ' + credentials;
  // axios.post(session_url, {
  //   headers: { 'Authorization': + basicAuth }
  // }).then(function(response) {
  //   console.log('Authenticated');
  // }).catch(function(error) {
  //   console.log('Error on Authentication');
  // });
  
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
