import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CatButtonWrap, CatButtonCont, CatButtonEar, CatButtonTail } from './CatButtonElements'
import cat_tail from "../../images/cat-tail.svg";
import cat_ear from "../../images/cat-ear.svg";

const CatButton = ({ text, to}) => {

    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    function setHover(bool) {
        setIsHovered(bool);
    }

    const handleClick = async event => {
        await delay(200);
        navigate(to);
    }

  return (
    <CatButtonWrap onClick={() => handleClick()} isHovered={isHovered} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <CatButtonCont isHovered={isHovered}>
        {text}
      </CatButtonCont>

      <CatButtonEar src={cat_ear} ear_side="left" isHovered={isHovered} />
      <CatButtonEar src={cat_ear} ear_side="right" isHovered={isHovered} />
      <CatButtonTail src={cat_tail} isHovered={isHovered} />
    </CatButtonWrap>
  )
}

export default CatButton
