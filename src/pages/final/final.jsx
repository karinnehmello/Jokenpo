import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './final.css';

function Final() {
  const location = useLocation();
  const { vitoriaJogador, vitoriaComputador, empate } = location.state || {};

  console.log({ vitoriaJogador, vitoriaComputador, empate });

  return (
    <div className="final-container">
      <div className="resultado">
        <h1>Resultado Final</h1>
        <div className="placar-final">
          <div className="resultado-item">
            <span>Jogador:</span>
            <span className='numeros'> {vitoriaJogador}</span>
          </div>
          <div className="resultado-item">
            <span>Computador:</span>
            <span className='numeros'> {vitoriaComputador}</span>
          </div>
          <div className="resultado-item">
            <span>Empates:</span>
            <span className='numeros'> {empate}</span>
          </div>
        </div>
      </div>
      <div className="reiniciar">
        <Link to="/">
          <button className='btn_reiniciar'>JOGAR NOVAMENTE</button>
        </Link>
      </div>
    </div>
  );
}

export default Final;
