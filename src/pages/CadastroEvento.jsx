import { useState } from 'react';
import api from '../services/api';

export default function CadastroEvento() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [nicho, setNicho] = useState('');
  const [preco, setPreco] = useState('');
  const [limite, setLimite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const evento = {
      titulo,
      descricao,
      data,
      local,
      nicho,
      preco,
      limite
    };

    api.post('/eventos', evento)
      .then(() => {
        alert('Evento cadastrado com sucesso!');
        limparCampos();
      })
      .catch(() => alert('Erro no cadastro do evento'));
  };

  const limparCampos = () => {
    setTitulo('');
    setDescricao('');
    setData('');
    setLocal('');
    setNicho('');
    setPreco('');
    setLimite('');
  };

  return (
    <div>
      <h2>Cadastro de Evento</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />

        <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
        <input placeholder="Local" value={local} onChange={(e) => setLocal(e.target.value)} required />

        <input placeholder="Nicho (ex: Tecnologia, Saúde...)" value={nicho} onChange={(e) => setNicho(e.target.value)} required />

        <input type="number" placeholder="Preço (R$)" value={preco} onChange={(e) => setPreco(e.target.value)} required />

        <input type="number" placeholder="Limite de inscrições" value={limite} onChange={(e) => setLimite(e.target.value)} required />

        <button type="submit">Cadastrar Evento</button>
      </form>
    </div>
  );
}
