import React, { useState } from 'react'
import { CatButtonCont, CatButtonEar, CatButtonTail } from './CatButtonElements'
import cat_tail from "../../images/cat-tail.png";
import cat_ear from "../../images/cat-ear.png";

const CatButton = ({ text }) => {

    const [isHovered, setIsHovered] = useState(false);

    function setHover(bool) {
        setIsHovered(bool);
    }

  return (
    <>
      <CatButtonCont isHovered={isHovered} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {text}
        <CatButtonEar src={cat_ear} ear_side="left" isHovered={isHovered} />
        <CatButtonEar src={cat_ear} ear_side="right" isHovered={isHovered} />
        <CatButtonTail src={cat_tail} isHovered={isHovered} />
      </CatButtonCont>
    </>
  )
}

export default CatButton
