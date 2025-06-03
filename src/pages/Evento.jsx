import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export default function Evento() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [inscrito, setInscrito] = useState(false);
  const [inscritos, setInscritos] = useState(0);

  // Carrega os dados do evento e se o usuário está inscrito
  useEffect(() => {
    api.get(`/eventos/${id}`)
      .then(res => {
        setEvento(res.data.evento);
        setInscritos(res.data.inscritos);
        setInscrito(res.data.estaInscrito);
      })
      .catch(err => console.log(err));
  }, [id]);

  // Fazer inscrição
  const handleInscricao = () => {
    api.post(`/eventos/${id}/inscrever`)
      .then(() => {
        alert('Inscrição realizada com sucesso!');
        setInscrito(true);
        setInscritos(inscritos + 1);
      })
      .catch(() => alert('Erro ao realizar inscrição.'));
  };

  // Cancelar inscrição
  const handleCancelar = () => {
    api.post(`/eventos/${id}/cancelar-inscricao`)
      .then(() => {
        alert('Inscrição cancelada com sucesso!');
        setInscrito(false);
        setInscritos(inscritos - 1);
      })
      .catch(() => alert('Erro ao cancelar inscrição.'));
  };

  if (!evento) {
    return <p>Carregando evento...</p>;
  }

  const eventoCheio = evento.limite > 0 && inscritos >= evento.limite;

  return (
    <div className="container-eventos">
      <h2>{evento.titulo}</h2>
      <div className="evento-card">
        <p><strong>Descrição:</strong> {evento.descricao}</p>
        <p><strong>Data:</strong> {evento.data}</p>
        <p><strong>Local:</strong> {evento.local}</p>
        <p><strong>Nicho:</strong> {evento.nicho}</p>
        <p><strong>Preço:</strong> {evento.preco ? `R$ ${evento.preco}` : 'Gratuito'}</p>
        <p><strong>Limite de Inscrições:</strong> {evento.limite > 0 ? evento.limite : 'Ilimitado'}</p>
        <p><strong>Inscritos:</strong> {inscritos}</p>

        {eventoCheio && !inscrito ? (
          <p style={{ color: 'red' }}><strong>Evento cheio. ❌</strong></p>
        ) : inscrito ? (
          <>
            <p style={{ color: 'green' }}><strong>Você está inscrito neste evento ✅</strong></p>
            <button onClick={handleCancelar}>Cancelar Inscrição</button>
          </>
        ) : (
          <button onClick={handleInscricao}>Inscrever-se</button>
        )}
      </div>
    </div>
  );
}
