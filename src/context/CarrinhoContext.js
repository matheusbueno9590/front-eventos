import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarEvento = (evento) => {
    if (!carrinho.some(e => e.id === evento.id)) {
      setCarrinho([...carrinho, evento]);
    }
  };

  const removerEvento = (id) => {
    setCarrinho(carrinho.filter(e => e.id !== id));
  };

  const limparCarrinho = () => setCarrinho([]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarEvento, removerEvento, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);
