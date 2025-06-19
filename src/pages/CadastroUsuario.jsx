import React, { useState } from 'react';
import '../styles/theme.css';

export default function CadastroUsuario() {
  const [tipoConta, setTipoConta] = useState('Pessoa Física (CPF)');

  return (
    <div style={{ backgroundColor: '#f9f6ef', minHeight: '100vh', paddingTop: '40px' }}>
      <div className="container">
        <h2 style={{ fontFamily: "'Pacifico', cursive", fontSize: '28px', marginBottom: '20px', textAlign: 'center' }}>
          Cadastro de Usuário
        </h2>

        <form>
          <label style={{ color: 'white', marginBottom: '5px' }}>Tipo de conta:</label>
          <select
            value={tipoConta}
            onChange={(e) => setTipoConta(e.target.value)}
            className="select"
          >
            <option>Pessoa Física (CPF)</option>
            <option>Pessoa Jurídica (CNPJ)</option>
          </select>

          <input type="text" placeholder="Nome" required />
          {tipoConta === 'Pessoa Física (CPF)' ? (
            <input type="text" placeholder="CPF" required />
          ) : (
            <input type="text" placeholder="CNPJ" required />
          )}

          {/* Apenas campo de estado */}
          <select className="select" required>
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

          <input type="text" placeholder="Endereço" required />

          {tipoConta === 'Pessoa Física (CPF)' && (
            <select className="select" required>
              <option value="">Gênero</option>
              <option>Feminino</option>
              <option>Masculino</option>
              <option>Outro</option>
              <option>Prefiro não dizer</option>
            </select>
          )}

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />

          <button type="submit">CADASTRAR</button>
        </form>
      </div>
    </div>
  );
}
