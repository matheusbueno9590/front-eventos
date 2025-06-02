import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroEvento from './pages/CadastroEvento';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import Perfil from './pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<CadastroUsuario />} />
        <Route path='/evento' element={<CadastroEvento />} />
        <Route path='/home' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
