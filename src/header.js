import React from 'react';
import './Header.css';

function Header({ setActiveComponent }) {
  return (
    <header className="app-header">
      <h1>Aplicação Multifuncional</h1>
      <nav>
        <ul className="nav-list">
          <li onClick={() => setActiveComponent('TodoList')}>To-Do List</li>
          <li onClick={() => setActiveComponent('ClickCounter')}>Contador de Cliques</li>
          <li onClick={() => setActiveComponent('TicTacToe')}>Jogo da Velha</li>
          <li onClick={() => setActiveComponent('Calculator')}>Calculadora</li>
          <li onClick={() => setActiveComponent('CepFinder')}>Buscador de CE</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;