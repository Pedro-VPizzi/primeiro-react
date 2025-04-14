import React, { useState } from 'react';
import './ClickCounter.css';

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Contador de Cliques</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
      <button onClick={() => setCount(0)}>Resetar</button>
    </div>
  );
}

export default ClickCounter;