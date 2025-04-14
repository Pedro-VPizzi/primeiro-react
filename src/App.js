import React, { useState } from 'react';
import './App.css';
import Header from './header';
import TodoList from './TodoList';
import ClickCounter from './ClickCounter';
import TicTacToe from './TicTacToe';
import Calculator from './Calculator';
import CepFinder from './CepFinder';

function App() {
  const [activeComponent, setActiveComponent] = useState('TodoList');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'TodoList':
        return <TodoList />;
      case 'ClickCounter':
        return <ClickCounter />;
      case 'TicTacToe':
        return <TicTacToe />;
      case 'Calculator':
        return <Calculator />;
      case 'CepFinder':
        return <CepFinder />;
      default:
        return <TodoList />;
    }
  };

  return (
    <div className="App">
      <Header setActiveComponent={setActiveComponent} />
      <main className="main-content">
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;