import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function Home() {
  const [eventos, setEventos] = useState([]);
  const [busca, setBusca] = useState('');

  // Carrega os eventos da API
  useEffect(() => {
    api.get('/eventos')
      .then(res => setEventos(res.data))
      .catch(err => console.log(err));
  }, []);

  // Filtro de busca
  const eventosFiltrados = eventos.filter((e) =>
    e.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    e.local.toLowerCase().includes(busca.toLowerCase()) ||
    e.nicho.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container-eventos">
      <h2>Eventos Disponíveis</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por título, local ou nicho..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {eventosFiltrados.length > 0 ? (
        eventosFiltrados.map((e) => (
          <div key={e.id} className="evento-card">
            <Link to={`/evento/${e.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h3>{e.titulo}</h3>
            </Link>
            <p><strong>Descrição:</strong> {e.descricao}</p>
            <p><strong>Data:</strong> {e.data}</p>
            <p><strong>Local:</strong> {e.local}</p>
            <p><strong>Nicho:</strong> {e.nicho}</p>
            <p><strong>Preço:</strong> {e.preco ? `R$ ${e.preco}` : 'Gratuito'}</p>
            <p><strong>Limite de Inscrições:</strong> {e.limite}</p>
          </div>
        ))
      ) : (
        <p>Nenhum evento encontrado.</p>
      )}
    </div>
  );
}
