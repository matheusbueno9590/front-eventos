import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function Perfil() {
  const [perfil, setPerfil] = useState({});
  const [eventosInscritos, setEventosInscritos] = useState([]);

  useEffect(() => {
    api.get('/perfil')
      .then(res => {
        setPerfil(res.data.usuario);
        setEventosInscritos(res.data.eventosInscritos);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container-eventos">
      <h2>Meu Perfil</h2>
      {perfil ? (
        <div className="evento-card">
          <p><strong>Nome:</strong> {perfil.nome}</p>
          <p><strong>Email:</strong> {perfil.email}</p>
          <p><strong>Telefone:</strong> {perfil.telefone}</p>
          <p><strong>Endereço:</strong> {perfil.endereco}</p>
          <p><strong>{perfil.tipo === 'cpf' ? 'CPF' : 'CNPJ'}:</strong> {perfil.documento}</p>
          {perfil.tipo === 'cpf' && <p><strong>Gênero:</strong> {perfil.genero}</p>}

          <h3>Eventos que estou inscrito:</h3>
          {eventosInscritos.length > 0 ? (
            eventosInscritos.map((e) => (
              <div key={e.id} className="evento-card">
                <Link to={`/evento/${e.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <h4>{e.titulo}</h4>
                </Link>
                <p><strong>Data:</strong> {e.data}</p>
                <p><strong>Local:</strong> {e.local}</p>
                <p><strong>Nicho:</strong> {e.nicho}</p>
              </div>
            ))
          ) : (
            <p>Você não está inscrito em nenhum evento.</p>
          )}
        </div>
      ) : (
        <p>Carregando perfil...</p>
      )}
    </div>
  );
}
