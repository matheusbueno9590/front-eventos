import React, { useState } from 'react';
import '../styles/theme.css';

export default function CadastroEvento() {
  const [evento, setEvento] = useState({
    titulo: '',
    nicho: '',
    preco: '',
    limite: '',
    estado: '',
    endereco: '',
    data: '',
    descricao: '',
  });

  const handleChange = (e) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: '#f9f6ef', minHeight: '100vh', paddingTop: '40px' }}>
      <div className="container">
        <h2 style={{ fontFamily: "'Pacifico', cursive", fontSize: '28px', marginBottom: '20px', textAlign: 'center' }}>
          Cadastro de Evento
        </h2>

        <form>
          <input
            type="text"
            placeholder="Título"
            name="titulo"
            value={evento.titulo}
            onChange={handleChange}
            required
          />

          <select
            className="select"
            name="nicho"
            value={evento.nicho}
            onChange={handleChange}
            required
          >
            <option value="">Nichos</option>
            <option>Show/Concerto</option>
            <option>Palestra/Seminário</option>
            <option>Festival Gastronômico</option>
            <option>Festa</option>
            <option>Evento Religioso</option>
            <option>Evento Esportivo</option>
            <option>Exposição de Arte</option>
            <option>Teatro/Dança/Performance</option>
            <option>Workshop/Oficina</option>
          </select>

          <input
            type="number"
            placeholder="Preço (R$)"
            name="preco"
            value={evento.preco}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            placeholder="Limite de Inscrições"
            name="limite"
            value={evento.limite}
            onChange={handleChange}
            required
          />

          {/* Apenas campo de estado */}
          <select
            className="select"
            name="estado"
            value={evento.estado}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o estado</option>
            <option value="AC">Acre (AC)</option>
            <option value="AL">Alagoas (AL)</option>
            <option value="AP">Amapá (AP)</option>
            <option value="AM">Amazonas (AM)</option>
            <option value="BA">Bahia (BA)</option>
            <option value="CE">Ceará (CE)</option>
            <option value="DF">Distrito Federal (DF)</option>
            <option value="ES">Espírito Santo (ES)</option>
            <option value="GO">Goiás (GO)</option>
            <option value="MA">Maranhão (MA)</option>
            <option value="MT">Mato Grosso (MT)</option>
            <option value="MS">Mato Grosso do Sul (MS)</option>
            <option value="MG">Minas Gerais (MG)</option>
            <option value="PA">Pará (PA)</option>
            <option value="PB">Paraíba (PB)</option>
            <option value="PR">Paraná (PR)</option>
            <option value="PE">Pernambuco (PE)</option>
            <option value="PI">Piauí (PI)</option>
            <option value="RJ">Rio de Janeiro (RJ)</option>
            <option value="RN">Rio Grande do Norte (RN)</option>
            <option value="RS">Rio Grande do Sul (RS)</option>
            <option value="RO">Rondônia (RO)</option>
            <option value="RR">Roraima (RR)</option>
            <option value="SC">Santa Catarina (SC)</option>
            <option value="SP">São Paulo (SP)</option>
            <option value="SE">Sergipe (SE)</option>
            <option value="TO">Tocantins (TO)</option>
          </select>

          <input
            type="text"
            placeholder="Endereço"
            name="endereco"
            value={evento.endereco}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="data"
            value={evento.data}
            onChange={handleChange}
            required
          />

          <textarea
            name="descricao"
            placeholder="Descrição"
            rows={4}
            value={evento.descricao}
            onChange={handleChange}
            className="textarea"
            required
          />

          <button type="submit">CADASTRAR EVENTO</button>
        </form>
      </div>
    </div>
  );
}
