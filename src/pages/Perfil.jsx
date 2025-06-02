import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Perfil() {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    api.get('/perfil') // Backend deve devolver os dados do usuário logado
      .then(res => setPerfil(res.data))
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
        </div>
      ) : (
        <p>Carregando perfil...</p>
      )}
    </div>
  );
}
