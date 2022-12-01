import './App.css';
import { Login } from './views/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registro } from './views/Registro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastrar" element={<Registro/>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;