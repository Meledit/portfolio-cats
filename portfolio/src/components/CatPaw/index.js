import React from 'react'
import cat_paw from "../../images/cat-paw.png"
import { CatPawElem } from './CatPawElements'

function CatPaw( { mousePosition } ) {
  return (
    <div style={{overflow: 'hidden' }}>
      <CatPawElem src={cat_paw} x={mousePosition.x} y={mousePosition.y} /> 
    </div>
  )
}

export default CatPaw
