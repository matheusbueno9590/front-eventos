import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroEvento from './pages/CadastroEvento';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Perfil from './pages/Perfil';
import Evento from './pages/Evento';
import Carrinho from './pages/Carrinho';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<CadastroUsuario />} />
          <Route path='/evento' element={<CadastroEvento />} />
          <Route path='/home' element={<Home />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/evento/:id' element={<Evento />} />
          <Route path='/carrinho' element={<Carrinho />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;