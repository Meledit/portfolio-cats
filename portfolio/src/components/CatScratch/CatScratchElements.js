import { styled, keyframes } from "styled-components";

const appear = keyframes`
    0% {
        height: 0px;
    }

    100% {
        height: 300px;
    }
`

export const CatScratchCont = styled.div`
    display: flex;
    gap: 25px;

    transform-origin: center;
    transform: translate(-50%, -50%) rotateZ(35deg);
    position: absolute;
    top: ${props => props.y}%;
    left: ${props => props.x}%;
    width: fit-content;
    height: 300px;
    user-select: none;
`;

export const CatScratchImg = styled.img`
    height: 300px;
`;

export const CatScratchImgCont = styled.div`
    height: 100%;  
    overflow: hidden;
    animation: ${appear} 0.5s linear forwards;
`;