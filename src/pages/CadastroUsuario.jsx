import { useState } from 'react';
import api from '../services/api';

export default function CadastroUsuario() {
  const [tipo, setTipo] = useState('cpf'); // cpf ou cnpj
  const [nome, setNome] = useState('');
  const [documento, setDocumento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [genero, setGenero] = useState(''); // só para CPF
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      tipo,
      nome,
      documento, // CPF ou CNPJ
      endereco,
      telefone,
      email,
      senha,
      ...(tipo === 'cpf' && { genero }), // só envia gênero se for CPF
    };

    api.post('/usuarios', data)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        limparCampos();
      })
      .catch(() => alert('Erro no cadastro'));
  };

  const limparCampos = () => {
    setNome('');
    setDocumento('');
    setEndereco('');
    setGenero('');
    setTelefone('');
    setEmail('');
    setSenha('');
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>Tipo de Conta:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="cpf">Pessoa Física (CPF)</option>
          <option value="cnpj">Pessoa Jurídica (CNPJ)</option>
        </select>

        <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

        <input
          placeholder={tipo === 'cpf' ? 'CPF' : 'CNPJ'}
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          required
        />

        <input placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />

        {tipo === 'cpf' && (
          <input
            placeholder="Gênero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        )}

        <input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
