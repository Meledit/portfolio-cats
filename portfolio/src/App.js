import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path='/' exact />
      </Routes>
    </Router>
  );
}

export default App;
