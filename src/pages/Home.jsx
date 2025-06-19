import React from 'react';
import '../styles/theme.css';

export default function Home() {
  const categorias = [
    'Cerimônia', 'Comemoração', 'Congresso/Simpósio', 'Evento Corporativo', 'Evento Esportivo',
    'Evento Online', 'Evento Religioso', 'Exposição de Arte', 'Festa', 'Festa Social',
    'Festival Gastronômico', 'Lançamento', 'Palestra/Seminário', 'Show/Concerto',
    'Teatro/Dança/Performance', 'Workshop/Oficina'
  ];

  return (
    <div style={{ backgroundColor: '#f9f6ef', minHeight: '100vh', paddingTop: '40px' }}>
    

      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Pesquise por Eventos" />
          <input type="text" placeholder="Insira sua localização" />
          <button className="cart-button">🛒 0</button>
        </div>

        <div className="categories">
          {categorias.map((categoria) => (
            <button key={categoria} className="category-button">{categoria}</button>
          ))}
        </div>

        <div className="eventos-grid" style={{ marginTop: 40 }}>
          {[...Array(4)].map((_, i) => (
            <div className="event-card" key={i}>Eventos Cadastrados</div>
          ))}
        </div>
      </div>
    </div>
  );
}
