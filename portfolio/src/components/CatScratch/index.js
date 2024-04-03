import React, { useState, useEffect } from 'react'
import img1 from "../../images/scratch-1.svg"
import img2 from "../../images/scratch-2.svg"
import img3 from "../../images/scratch-3.svg"
import { CatScratchCont, CatScratchImg, CatScratchImgCont } from './CatScratchElements'

const CatScratch = ( { hasClickedOn } ) => {

  const [isVisible, setIsVisible] = useState(true);
  const [animEnd, setAnimEnd] = useState(false);

  useEffect(() => {
    // Utiliser setTimeout pour définir un délai de 5 secondes
    const timer = setTimeout(() => {
      // Changer la valeur de la variable r à true après 5 secondes
      setIsVisible(false);
    }, 7000); // 5000 millisecondes = 5 secondes

    const timer2 = setTimeout(() => {
      setAnimEnd(true);
    }, 150); 

    // Nettoyer le timer si le composant est démonté avant la fin du délai de 5 secondes
    return () => clearTimeout(timer);
  }, []); // Le tableau vide [] indique que cet effet ne dépend d'aucune valeur, donc il ne s'exécute qu'une seule fois après le rendu initial


  return (
    <CatScratchCont isVisible={isVisible} r={hasClickedOn.hasOwnProperty('r') ? hasClickedOn.r : "35"} x={hasClickedOn.hasOwnProperty('x') ? hasClickedOn.x : -100} y={hasClickedOn.hasOwnProperty('y') ? hasClickedOn.y : -100}>
        <CatScratchImgCont>    
            <CatScratchImg src={img1} />  
        </CatScratchImgCont>
        
        <CatScratchImgCont>    
            <CatScratchImg src={img2} />  
        </CatScratchImgCont>
        
        <CatScratchImgCont>    
            <CatScratchImg src={img3} />  
        </CatScratchImgCont>
    </CatScratchCont> 
  )
}

export default CatScratch
