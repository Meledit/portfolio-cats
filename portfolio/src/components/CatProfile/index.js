import React from 'react'
import { CatProfileCont, CatProfileImg, CatProfileTextCont, CatProfileText, CatProfileWrap } from './catProfileElements';
import pfp from "../../images/pfp.png";
import moi1 from "../../images/moi1.png";
import moi2 from "../../images/moi2.png";
import moi3 from "../../images/moi3.png";

const CatProfile = () => {
    const [currentSelection, setCurrentSelection] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(0);

    const pictures = 
    [
        {
            src : moi3,
            text : "une photo de moi1.png"
        },
        {
            src : moi2,
            text : "une photo de moi3.png"
        },
        {
            src : moi1,
            text : "une photo de moi3.png"
        },
        {
            src : pfp,
            text : "un dessin par manque de photo.png"
        }
    ]

    function handleClick() {
        setCurrentSelection((currentSelection + 1) % pictures.length);
        console.log(currentSelection);
    }

  return (
    <CatProfileWrap>
        <CatProfileCont onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(0)} onClick={() => handleClick()}>
            {pictures.map((picture, index) => { 
                return (
                    <CatProfileImg isHovered={isHovered} len={pictures.length} currentSelection={currentSelection} i={index} key={index} src={picture.src} />
                );
            })}
        </CatProfileCont>

        <CatProfileTextCont>
            {pictures.map((picture, index) => { 
                return (
                    <CatProfileText currentSelection={currentSelection} key={index}>{ picture.text }</CatProfileText>
                );
            })}
        </CatProfileTextCont>
    </CatProfileWrap>
  )
}

export default CatProfile
