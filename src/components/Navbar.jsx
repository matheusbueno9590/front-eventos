import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/cadastro">Cadastro Usuário</Link></li>
          <li><Link to="/evento">Cadastro Evento</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
        </ul>
      </nav>
    </header>
  );
}
