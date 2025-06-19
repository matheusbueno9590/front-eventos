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

          <div style={{ display: 'flex', gap: '10px' }}>
            <select className="select" required>
              <option value="">Cidade</option>
              {/* Inserir cidades */}
            </select>
            <select className="select" required>
              <option value="">Estado</option>
              {/* Inserir estados */}
            </select>
          </div>

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
