import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { CarrinhoProvider } from './context/CarrinhoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarrinhoProvider>
      <App />
    </CarrinhoProvider>
  </React.StrictMode>
);
