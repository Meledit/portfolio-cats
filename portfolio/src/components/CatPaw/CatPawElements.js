import styled from "styled-components";

export const CatPawElem = styled.img`
    height: 50%;

    position: absolute;
    top: ${props => props.y + "%"};
    left: ${props => props.x + "%"};
    transform: ${props => props.x > 50 ? "translate(25%, 0%) scaleX(-1)" : "translate(-125%, 0%) scaleX(1)"};

    z-index: 999;
    //transition: all 0.1s;
    transition: transform 0.25s cubic-bezier(.76,1.65,0,1);
`;