import React from 'react';
import '../styles/theme.css'; // Certifique-se de importar os estilos globais

export default function Login() {
  return (
    <div style={{ backgroundColor: '#f9f6ef', minHeight: '100vh', paddingTop: '40px' }}>


      <div className="container">
        <h2 style={{ fontFamily: "'Pacifico', cursive", fontSize: '28px', marginBottom: '20px', textAlign: 'center' }}>
          Login
        </h2>

        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">ENTRAR</button>

          <div style={{ textAlign: 'center', marginTop: '15px', color: 'white' }}>
            <a href="#" style={{ color: '#eee', textDecoration: 'underline' }}>Esqueci minha senha</a>
            <div style={{ margin: '10px 0' }}>────────── ou ──────────</div>
            <a href="/cadastro" style={{ fontWeight: 'bold', color: '#fff' }}>Criar Conta</a>
          </div>
        </form>
      </div>
    </div>
  );
}
