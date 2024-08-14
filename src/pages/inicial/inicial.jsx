import { Link } from 'react-router-dom';
import '../inicial/inicial.css';

function Inicial() {
  return (
    <>
      <div className="titulo">JOKENPÔ</div>
      <Link to="/jogo">
        <button className='btn_jogar'>JOGAR</button>
      </Link>
    </>
  );
}

export default Inicial;
