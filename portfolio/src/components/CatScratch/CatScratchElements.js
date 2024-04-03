import { styled, keyframes } from "styled-components";

const appear = keyframes`
    0% {
        height: 0px;
    }

    100% {
        height: 300px;
    }
`

const fade = keyframes`
    0% {
        opacity: 100%;
    }

    100% {
        opacity: 0%;
    }
`

export const CatScratchCont = styled.div`
    display: ${props => props.isVisible? "flex" : "none"};
    gap: 25px;

    transform-origin: center;
    transform: translate(-50%, -50%) rotateZ(${props => props.r}deg);
    position: absolute;
    top: ${props => props.y}%;
    left: ${props => props.x}%;
    width: fit-content;
    height: 300px;
    user-select: none;
    animation: ${fade} 3s linear 4s forwards;
`;

export const CatScratchImg = styled.img`
    height: 300px;
`;

export const CatScratchImgCont = styled.div`
    height: 100%;  
    overflow: hidden;
    animation: ${appear} 0.1s linear forwards;
`;