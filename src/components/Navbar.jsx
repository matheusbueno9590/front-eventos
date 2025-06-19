import { Link } from 'react-router-dom';
import { useCarrinho } from '../context/CarrinhoContext';
import { FiShoppingCart } from 'react-icons/fi'; // Ícone de carrinho estilizado

function Navbar() {
  const { carrinho } = useCarrinho();
  const quantidade = carrinho.length;

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">Confirmed Event</h1>
      </div>

      <nav className="navbar-right">
          <Link to="/home" className="nav-link">Home</Link>
        <Link to="/evento" className="nav-link">Cadastro de eventos</Link>
        <Link to="/perfil" className="nav-link">Perfil</Link>
        <Link to="/" className="nav-link">Login</Link>

        <Link to="/carrinho" className="nav-cart">
          <FiShoppingCart size={24} className="cart-icon" />
          {quantidade > 0 && <span className="cart-count">{quantidade}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
