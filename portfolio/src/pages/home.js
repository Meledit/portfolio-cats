import React from 'react'
import { useState, useEffect } from "react"
import CatButton from '../components/CatButton'
import "../css/home.css"
import CatPaw from '../components/CatPaw'
import CatScratch from '../components/CatScratch'

const Home = ({ setIsVisible }) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasClickedOn, setHasClickedOn] = useState([]); // Liste des endroits où on a cliqué
  const [clickedId, setClickedId] = useState(0);


  useEffect(() => {
    // Utiliser setTimeout pour définir un délai de 5 secondes
    const interval = setInterval(() => {
      hasClickedOn.splice(0, ( Math.floor(hasClickedOn.length / 2)));
    }, 7000);

    return () => clearInterval(interval);
  }, []); 

  useEffect(() => {
    setIsVisible(false);
  }, []); 


  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    
    var percentX = (clientX / window.innerWidth) * 100;
    var percentY = (clientY / window.innerHeight) * 100;

    if (percentY < 60) {
      percentY = 60;
    }

    setMousePosition({ x: percentX, y: percentY });
  };

  const handleMouseDown = (event) => {
    
    const { clientX, clientY } = event;
    
    let percentX = (clientX / window.innerWidth) * 100;
    let percentY = (clientY / window.innerHeight) * 100;
    let angle = Math.floor(Math.random() * (340 - 30 + 1)) + 30;

    setHasClickedOn([...hasClickedOn, { id: clickedId, x: percentX, y: percentY, r: angle}]);
    setClickedId(clickedId + 1);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width : '100%', overflow: 'hidden' }} onMouseMove={handleMouseMove} onMouseDown={(e) => handleMouseDown(e)} >
        <CatPaw mousePosition={mousePosition} />
        {
          hasClickedOn.map((item, i) => {
            return (
              <CatScratch key={i} hasClickedOn={item} />
            );
          })
        }
        <div className='homeCont'>
            <h1 className='homeTitle'> Nidal Idrissi </h1>
            <CatButton to="whoAmI" text="Continuer" />
        </div>
    </div>
  )
}

export default Home
