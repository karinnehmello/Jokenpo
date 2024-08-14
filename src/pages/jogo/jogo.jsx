import React, { useState, useEffect } from 'react';
import pedra from '../../assets/pedra.svg';
import papel from '../../assets/papel.svg';
import tesoura from '../../assets/tesoura.svg';
import { useNavigate } from 'react-router-dom';
import './jogo.css';

function Jogo() {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);
  const [vitoriaJogador, setVitoriaJogador] = useState(0);
  const [vitoriaComputador, setVitoriaComputador] = useState(0);
  const [empate, setEmpates] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (escolhaJogador) {
      const choices = ['Pedra', 'Papel', 'Tesoura'];
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setEscolhaComputador(randomChoice);

      if (escolhaJogador === randomChoice) {
        setEmpates(prevTies => prevTies + 1);
      } else if (
        (escolhaJogador === 'Pedra' && randomChoice === 'Tesoura') ||
        (escolhaJogador === 'Papel' && randomChoice === 'Pedra') ||
        (escolhaJogador === 'Tesoura' && randomChoice === 'Papel')
      ) {
        setVitoriaJogador(prevWins => prevWins + 1);
      } else {
        setVitoriaComputador(prevWins => prevWins + 1);
      }
    }
  }, [escolhaJogador]);

  const renderChoice = (choice) => {
    switch (choice) {
      case 'Pedra':
        return pedra;
      case 'Papel':
        return papel;
      case 'Tesoura':
        return tesoura;
      default:
        return null;
    }
  };

  const final = () => {
    console.log({ vitoriaJogador, vitoriaComputador, empate });
    navigate('/final', {
      state: {
        vitoriaJogador,
        vitoriaComputador,
        empate,
      },
    });
  };

  return (
    <div className="jogo-container">
      <div className="titulo">JOKENPÔ</div>

      <div className="jogadores">
        <div className="j1">JOGADOR</div>
        <div className="j2">COMPUTADOR</div>
      </div>

      <div className="placar0">
        <div className="tituloPlacar">PLACAR</div>
        <div className="placar">
          <div className="J1">{vitoriaJogador}</div>
          <div className="espaco">.</div>
          <div className="J2">{vitoriaComputador}</div>
        </div>
        <div className="tituloPlacar">EMPATES: {empate}</div>
      </div>

      <div className="jogar">
        <h1>Escolha sua jogada</h1>
        <button onClick={() => setEscolhaJogador('Pedra')}>
          <img src={pedra} alt="Pedra" style={{ width: '50px', height: '50px' }} />
        </button>
        <button onClick={() => setEscolhaJogador('Papel')}>
          <img src={papel} alt="Papel" style={{ width: '50px', height: '50px' }} />
        </button>
        <button onClick={() => setEscolhaJogador('Tesoura')}>
          <img src={tesoura} alt="Tesoura" style={{ width: '50px', height: '50px' }} />
        </button>
      </div>

      {escolhaJogador && escolhaComputador && (
        <div className="escolhas">
          <h2>Escolhas</h2>
          <div className="escolha">
            <div>Jogador:</div>
            <img src={renderChoice(escolhaJogador)} alt={`Escolha do Jogador: ${escolhaJogador}`} style={{ width: '50px', height: '50px' }} />
          </div>
          <div className="escolha">
            <div>Computador:</div>
            <img src={renderChoice(escolhaComputador)} alt={`Escolha do Computador: ${escolhaComputador}`} style={{ width: '50px', height: '50px' }} />
          </div>
        </div>
      )}

      <div className="voltar">
          <button className='btn_voltar' onClick={final}>VER O RESULTADO</button>
      </div>
    </div>
  );
}

export default Jogo;
