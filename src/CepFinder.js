import React, { useState } from 'react';
import './CepFinder.css';

function CepFinder() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
      setError('Por favor, insira um CEP válido com 8 dígitos');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch (err) {
      setError('Erro ao buscar CEP. Tente novamente.');
      setAddress(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cep-container">
      <h2>Buscador de CEP</h2>
      <div className="cep-search">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          placeholder="Digite o CEP (apenas números)"
          maxLength="8"
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
      
      {error && <div className="error">{error}</div>}
      
      {address && (
        <div className="address-result">
          <h3>Resultado:</h3>
          <p><strong>CEP:</strong> {address.cep}</p>
          <p><strong>Logradouro:</strong> {address.logradouro}</p>
          <p><strong>Complemento:</strong> {address.complemento || 'N/A'}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade}</p>
          <p><strong>Estado:</strong> {address.uf}</p>
        </div>
      )}
    </div>
  );
}

export default CepFinder;