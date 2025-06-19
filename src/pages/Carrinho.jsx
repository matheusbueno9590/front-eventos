import React from 'react';
import { useCarrinho } from '../context/CarrinhoContext';  // usa o hook
import '../styles/theme.css';

export default function Carrinho() {
  const { carrinho, removerEvento } = useCarrinho();  // pegando o removerEvento, não removerDoCarrinho

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (
    <div style={{ backgroundColor: '#f9f6ef', minHeight: '100vh', paddingTop: '40px' }}>
      

      <div className="container">
        <h2 className="subtitle">Meu Carrinho</h2>

        {carrinho.length === 0 ? (
          <p style={{ fontFamily: 'serif', fontSize: 18, marginTop: 20 }}>
            Seu carrinho está vazio.
          </p>
        ) : (
          <>
            <div className="eventos-grid" style={{ marginTop: 30 }}>
              {carrinho.map((item) => (
                <div className="event-card" key={item.id}>
                  <h4 style={{ marginBottom: 10 }}>{item.titulo}</h4>
                  <p style={{ marginBottom: 8 }}>Preço: R$ {item.preco.toFixed(2)}</p>
                  <button
                    onClick={() => removerEvento(item.id)}  // usa id para remover
                    className="remove-btn"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            <div className="total-box">
              <h3>Total: R$ {total.toFixed(2)}</h3>
              <button className="finalizar-btn">Finalizar Inscrição</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
