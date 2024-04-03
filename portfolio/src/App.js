import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.js";
import Who from './pages/who.js';
import CatNavbar from './components/CatNavbar/index.js';
import Projects from './pages/projects.js';

function App() {

  const [isVisible, setIsVisible] = React.useState(false);

  return ( 
    <Router>
      <CatNavbar isVisible={isVisible} />
      <Routes>
        <Route element={<Projects setIsVisible={setIsVisible} />} path='/projects' exact />
        <Route element={<Who setIsVisible={setIsVisible} />} path='/WhoAmI' exact />
        <Route element={<Home setIsVisible={setIsVisible} />} path='/' exact />
      </Routes>
    </Router>
  );
}

export default App;
