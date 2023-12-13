import React from 'react'
import img1 from "../../images/scratch-1.svg"
import img2 from "../../images/scratch-2.svg"
import img3 from "../../images/scratch-3.svg"
import { CatScratchCont, CatScratchImg, CatScratchImgCont } from './CatScratchElements'

const CatScratch = ( { hasClickedOn } ) => {
  return (
    <CatScratchCont x={hasClickedOn.x} y={hasClickedOn.y}>
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
