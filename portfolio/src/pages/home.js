import React from 'react'
import { useState } from "react"
import CatButton from '../components/CatButton'
import "../css/home.css"
import CatPaw from '../components/CatPaw'

const Home = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    
    var percentX = (clientX / window.innerWidth) * 100;
    var percentY = (clientY / window.innerHeight) * 100;

    if (percentY < 60) {
      percentY = 60;
    }

    setMousePosition({ x: percentX, y: percentY });
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width : '100%', overflow: 'hidden' }} onMouseMove={handleMouseMove}>
        <CatPaw mousePosition={mousePosition} />
        <div className='homeCont'>
            <h1 className='homeTitle'> Nidal Idrissi </h1>
            <CatButton text="Continuer" />
        </div>
    </div>
  )
}

export default Home
