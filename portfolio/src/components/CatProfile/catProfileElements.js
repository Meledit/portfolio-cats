import styled, {keyframes} from "styled-components";


const idle = keyframes`
    0% {
        top: -5px;
    }

    50% {
        top: 0px;
    }

    100% {
        top: -5px;
    }
`;

const appear = keyframes`
    0% {

    }

    50% {
    }

    100% {
    }
`;

export const CatProfileWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const CatProfileCont = styled.div`
    width: 100%;
    height: 275px;
    cursor: pointer;
    position: relative;
    transition: all 0.5s cubic-bezier(.58,2.08,.12,.71);
`;

export const CatProfileImg = styled.img`
    width: 275px;
    aspect-ratio: 1;
    object-fit: cover;
    position: absolute;
    top: 0%;
    left: 0;
    transform-origin: top left;
    transform: ${props => props.currentSelection > props.i ? "translate(-100vw, 0vh) rotate(" + props.isHovered * 3 + "deg)" : "translate(" + props.isHovered * (props.i - (props.currentSelection + 1)) * 10 + "px) rotate(-" + props.isHovered * (props.len - props.i - props.currentSelection) * 2 + "deg)"};
    z-index: ${props => props.i * -10};
    border: 4px solid #000;
    transition: all 0.75s cubic-bezier(.58,2.08,.12,.71);;
    border-radius: 10px;
    user-select: none;
    animation: ${idle} ${props => props.isHovered == 1 ? "0s" : "2s infinite"};
`;

export const CatProfileTextCont = styled.div`
    width: 100%;
    position: relative;
    margin-top: 10px;
    overflow-x: hidden;
    display: flex;
    flex-shrink: 0;
`;

export const CatProfileText = styled.div`
    width: 100%;
    text-align: center;
    flex-shrink: 0;
    user-select: none;
    font-size: 1.25rem;
    transform: translateX(${props => props.currentSelection * -100}%);
    transition: all 0.5s ease;
`;