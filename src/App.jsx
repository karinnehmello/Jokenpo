import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicial from '../src/pages/inicial/inicial';
import Jogo from '../src/pages/jogo/jogo';
import Final from '../src/pages/final/final';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default App;
