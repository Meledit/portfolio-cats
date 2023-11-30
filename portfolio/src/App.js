import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CatButton from './components/CatButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<CatButton text="Continuer" />} path='/' exact />
      </Routes>
    </Router>
  );
}

export default App;
