import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { useCarrinho } from '../context/CarrinhoContext';
import '../styles/theme.css';

export default function Evento() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [inscrito, setInscrito] = useState(false);
  const [inscritos, setInscritos] = useState(0);
  const { adicionarEvento } = useCarrinho();

  useEffect(() => {
    api.get(`/eventos/${id}`)
      .then(res => {
        setEvento(res.data.evento);
        setInscritos(res.data.inscritos);
        setInscrito(res.data.estaInscrito);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleInscricao = () => {
    api.post(`/eventos/${id}/inscrever`)
      .then(() => {
        alert('Inscrição realizada com sucesso!');
        setInscrito(true);
        setInscritos(inscritos + 1);
      })
      .catch(() => alert('Erro ao realizar inscrição.'));
  };

  const handleCancelar = () => {
    api.post(`/eventos/${id}/cancelar-inscricao`)
      .then(() => {
        alert('Inscrição cancelada com sucesso!');
        setInscrito(false);
        setInscritos(inscritos - 1);
      })
      .catch(() => alert('Erro ao cancelar inscrição.'));
  };

  if (!evento) return <p className="loading">Carregando evento...</p>;

  const eventoCheio = evento.limite > 0 && inscritos >= evento.limite;

  return (
    <div style={{ backgroundColor: '#f9f6ef', minHeight: '100vh' }}>
      <header className="header">
        <img src="/logo.png" alt="Logo Confirmed Event" style={{ height: 60 }} />
        <h1 className="title">&lt; Confirmed Event &gt;</h1>
        <div className="header-links">
          <a href="/home">&lt;home&gt;</a>
          <a href="/perfil">&lt;perfil&gt;</a>
        </div>
      </header>

      <div className="container">
        <h2 className="subtitle">{evento.titulo}</h2>

        <div className="evento-detalhe-card">
          <p><strong>📅 Data:</strong> {evento.data}</p>
          <p><strong>📍 Local:</strong> {evento.local}</p>
          <p><strong>🗂 Nicho:</strong> {evento.nicho}</p>
          <p><strong>📝 Descrição:</strong> {evento.descricao}</p>
          <p><strong>💰 Preço:</strong> {evento.preco > 0 ? `R$ ${evento.preco}` : 'Gratuito'}</p>
          <p><strong>👥 Inscritos:</strong> {inscritos} / {evento.limite > 0 ? evento.limite : 'Ilimitado'}</p>

          {eventoCheio && !inscrito ? (
            <p className="estado-cheio"><strong>Evento cheio ❌</strong></p>
          ) : inscrito ? (
            <>
              <p className="estado-inscrito"><strong>Você está inscrito ✅</strong></p>
              <button onClick={handleCancelar} className="btn-cancelar">Cancelar Inscrição</button>
            </>
          ) : (
            <button onClick={handleInscricao} className="btn-inscrever">Inscrever-se</button>
          )}

          {evento.preco > 0 && !inscrito && !eventoCheio && (
            <button onClick={() => adicionarEvento(evento)} className="btn-carrinho">
              Adicionar ao Carrinho 🛒
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
