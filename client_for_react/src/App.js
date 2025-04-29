import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Patient_registration_form from './Component/Patient_registration_form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Patient_registration_form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
