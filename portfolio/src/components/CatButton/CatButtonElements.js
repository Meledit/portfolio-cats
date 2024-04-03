import styled, { keyframes } from 'styled-components';

const idle = keyframes`
    0% {
        transform: rotate(140deg);
    }

    50% {
        transform: rotate(120deg);
    }

    100% {
        transform: rotate(140deg);
    }
`;

export const CatButtonCont = styled.div`
    width: fit-content;
    height: fit-content;

    color: ${props => props.isHovered ? "#fff" : "#000"};
    background: ${props => props.isHovered ? "#000" : "#fff"};
    border: 3px solid #000;
    border-radius: 1000px;

    padding: 5px 20px 5px 20px;

    position: relative;
    z-index: 999;
`;

export const CatButtonEar = styled.img`
    position: absolute;
    top: ${props => props.isHovered ? "0%" : "25%"};
    left: ${props => props.ear_side == "left" ? "15%" : "70%"};
    transform: ${props => props.isHovered ? "translateY(-75%)" : "translateX(0)"};
    z-index: -999;

    width: 20px;
    transition: all 0.5s cubic-bezier(.58,2.08,.12,.71);
`;

export const CatButtonTail = styled.img`
    position: absolute;
    top: ${props => props.isHovered ? "50%" : "10%"};
    left: ${props => props.isHovered ? "90%" : "50%"};
    transform-origin: left;
    transform: ${props => props.isHovered ? "rotate(130deg)" : "rotate(180deg)"};
    z-index: -999;

    width: 50px;
    transition: all 0.5s cubic-bezier(.58,2.08,.12,.71);
    animation: ${idle} ${props => props.isHovered ? "4s linear infinite" : "0s linear infinite"};
`;

export const CatButtonWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.25rem;

    width: fit-content;
    height: fit-content;

    cursor: pointer;
    user-select: none;
    transition: transform 0.33s cubic-bezier(.58,2.08,.12,.71);

    &:hover {
        transform: scale(1.075) rotate(5deg);
    }

    &:active {
        transform: scale(0.9) rotate(-5deg);
    }
`;