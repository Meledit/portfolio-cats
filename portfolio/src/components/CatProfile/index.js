import React from 'react'
import { CatProfileCont, CatProfileImg, CatProfileTextCont, CatProfileText, CatProfileWrap } from './catProfileElements';
import cat_tail from "../../images/cat-tail.svg";
import cat_ear from "../../images/cat-ear.svg";
import pfp from "../../images/pfp.png";

const CatProfile = () => {
    const [currentSelection, setCurrentSelection] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(0);

    const pictures = 
    [
        {
            src : pfp,
            text : "a picture of me.png"
        },
        {
            src : cat_ear,
            text : "a picture of me2.png"
        },
        {
            src : pfp,
            text : "a picture of me3.png"
        },
        {
            src : cat_ear,
            text : "a picture of me4.png"
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
