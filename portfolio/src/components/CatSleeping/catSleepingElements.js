import styled, { keyframes } from "styled-components";

const idle = keyframes`
    0% {
        transform: translate(-10px, 0px) scale(1) rotate(15deg);
        opacity: 0.25;
    }

    33% {
        transform: translate(10px, -25px) scale(1.25) rotate(-15deg);
        opacity: 1;
    }

    66% {
        transform: translate(-10px, -40px) scale(1.75) rotate(15deg);
        opacity: 0.75;
    }

    100% {
        transform: translate(10px, -80px) scale(2) rotate(-15deg);
        opacity: 0;
    }
`;

const appear = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }

    100% {
        transform: translateY(-60%);
        opacity: 1;
    }
`;

export const CatSleepingCont = styled.div`
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-60%);
    opacity: 0;
    animation: ${appear} 1s ease-out 0.75s forwards;
`;

export const CatSleepingImg = styled.img`
    width: 100%;
    user-select: none;
`;

export const CatSleepingZ = styled.p`
    width: 30px;
    position: absolute;
    top: 0;
    left: 40%;
    user-select: none;
    opacity: 0;
    animation: ${idle} 3s infinite ${props => props.i * 1}s forwards;
`;