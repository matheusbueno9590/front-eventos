import React, { useState } from 'react';
import '../styles/theme.css';

export default function Perfil() {
  const [usuario, setUsuario] = useState({
    nome: '',
    documento: '',
    email: '',
    estado: '',
    endereco: ''
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: '#f9f6ef', minHeight: '100vh', paddingTop: '40px' }}>
      <div className="container">
        <h2 className="subtitle">Meu Perfil</h2>

        <form>
          <input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            placeholder="Nome"
          />
          <input
            type="text"
            name="documento"
            value={usuario.documento}
            onChange={handleChange}
            placeholder="CPF ou CNPJ"
          />
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            placeholder="Email"
          />

          {/* Select de Estados */}
          <select
            name="estado"
            value={usuario.estado}
            onChange={handleChange}
            className="select"
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
            name="endereco"
            value={usuario.endereco}
            onChange={handleChange}
            placeholder="Endereço"
          />

          <button type="submit">ALTERAR</button>
        </form>

        <div className="profile-events">
          <h3 style={{ fontFamily: "'Pacifico', cursive", fontSize: '22px' }}>
            Eventos que estou inscrito:
          </h3>
          <div className="eventos-grid">
            <div className="event-card">Eventos Cadastrados</div>
            <div className="event-card">Eventos Cadastrados</div>
            <div className="event-card">Eventos Cadastrados</div>
            <div className="event-card">Eventos Cadastrados</div>
          </div>
        </div>
      </div>
    </div>
  );
}
